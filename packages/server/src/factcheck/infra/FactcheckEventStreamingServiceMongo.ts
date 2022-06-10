import {
  BeforeApplicationShutdown,
  Injectable,
  Logger,
  NotFoundException,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ChangeStream } from 'mongodb';
import { Model } from 'mongoose';
import { concatWith, defer, finalize, Observable, takeWhile, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { env } from '../../config';
import { Factcheck, FactcheckDocument } from '../database';
import { FactcheckEvent, FactcheckEventStreamingService } from '../domain';
import { factcheckEventBatchStream } from './FactcheckEventBatchStream';
import { FactcheckEventStreamingCache } from './FactcheckEventStreamingCache';

const WATCH_PIPELINE = [
  {
    $match: {
      operationType: 'insert',
    },
  },
  {
    $project: {
      'fullDocument.id': '$fullDocument._id',
      'fullDocument.url': 1,
      'fullDocument.status': 1,
    },
  },
];

@Injectable()
class FactcheckEventStreamingServiceMongo
  implements OnApplicationBootstrap, BeforeApplicationShutdown, FactcheckEventStreamingService
{
  private readonly logger = new Logger(FactcheckEventStreamingServiceMongo.name);
  private readonly cache = new FactcheckEventStreamingCache(env.CACHE_SIZE);
  private changeStream?: ChangeStream<FactcheckEvent>;

  constructor(@InjectModel(Factcheck.name) private readonly factcheckModel: Model<FactcheckDocument>) {}

  async onApplicationBootstrap() {
    this.logger.log('onApplicationBootstrap');
    await this.initCache();
    this.setupChangeStream();
  }

  async beforeApplicationShutdown() {
    this.logger.log('beforeApplicationShutdown');
    await this.changeStream?.close();
  }

  async stream(token?: string): Promise<Observable<FactcheckEvent>> {
    if (token) {
      const maybeEntity = await this.factcheckModel.findById(token);
      if (!maybeEntity) throw new NotFoundException(`Unable to find factcheck with id(${token})`);
    }

    if (!this.cache.full || this.cache.isCacheHit(token)) {
      return this.createCacheStream(token);
    }

    return this.createBatchStream(token);
  }

  private async initCache() {
    const count = await this.factcheckModel.estimatedDocumentCount();
    const lastCount = Math.max(0, count - this.cache.size);
    const lastRecords = await this.factcheckModel
      .find({}, { _id: 1, url: 1, status: 1 })
      .skip(lastCount)
      .then((x) => x.map((y) => y.toEvent()));
    this.logger.debug(`Loaded ${lastRecords.length} records from db`);
    lastRecords.forEach((x) => this.cache.put(x));
    this.logger.debug(`Cache initialized (${this.cache.count}/${this.cache.size})`);
  }

  private setupChangeStream() {
    if (this.changeStream) {
      return;
    }

    this.changeStream = this.factcheckModel.watch<FactcheckEvent>(WATCH_PIPELINE);
    this.changeStream.on('change', (e) => {
      if (e.fullDocument) {
        this.cache.put({ ...e.fullDocument, id: e.fullDocument.id.toString() });
      }
    });

    // TODO implement recovery on db failure
  }

  private createCacheStream(token?: string) {
    return defer(() => {
      const clientId = uuid();
      this.logger.debug(`Client(${clientId}): connected with token(${token ?? 'empty'})`);
      return this.cache.stream(clientId, token).pipe(
        finalize(() => {
          this.logger.debug(`Client(${clientId}): disconnected`);
        }),
      );
    });
  }

  private createBatchStream(token?: string) {
    return defer(() => {
      const clientId = uuid();
      this.logger.debug(`Client(${clientId}): connected with token(${token ?? 'empty'})`);
      const ref = { current: token ?? 'empty' };
      const batch$ = factcheckEventBatchStream(this.factcheckModel, clientId, env.BATCH_SIZE, token);
      const cache$ = defer(() => this.cache.stream(clientId, ref.current));
      return batch$.pipe(
        tap((x) => (ref.current = x.id)),
        takeWhile((x) => !this.cache.isCacheHit(x.id), true),
        concatWith(cache$),
        finalize(() => {
          this.logger.debug(`Client(${clientId}): disconnected`);
        }),
      );
    });
  }
}

export { FactcheckEventStreamingServiceMongo };
