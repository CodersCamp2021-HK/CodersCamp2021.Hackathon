import { BeforeApplicationShutdown, Injectable, Logger, NotFoundException, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { finalize, NotFoundError, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { ChangeStream } from 'mongodb';

import { env } from '../../config';
import { Factcheck, FactcheckDocument } from '../database';
import { FactcheckEvent, FactcheckEventStreamingService } from '../domain';
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
  constructor(@InjectModel(Factcheck.name) private readonly factcheckModel: Model<FactcheckDocument>) {}

  private readonly logger = new Logger(FactcheckEventStreamingServiceMongo.name);
  private readonly cache = new FactcheckEventStreamingCache(env.CACHE_SIZE);
  private changeStream?: ChangeStream<FactcheckEvent>;

  private async fillCacheUsingLastEntries() {
    const count = await this.factcheckModel.estimatedDocumentCount();
    const lastRecords = (
      await this.factcheckModel.find({}, { _id: 1, url: 1, status: 1 }).skip(Math.max(0, count - this.cache.size))
    ).map((x) => x.toEvent());
    this.logger.debug(`Loaded ${lastRecords.length} records from db`);
    lastRecords.forEach((x) => this.cache.put(x));
    this.logger.debug(`Cache initialized (${this.cache.count}/${this.cache.size})`);
  }

  private setupChangeStream() {
    if(this.changeStream) {
      return;
    }

    this.changeStream = this.factcheckModel.watch<FactcheckEvent>(WATCH_PIPELINE);
    this.changeStream.on('change', (e) => {
      if (e.fullDocument) {
        this.cache.put({... e.fullDocument, id: e.fullDocument.id.toString()});
      }
    });

    // TODO implement recovery on db failure
  }

  async onApplicationBootstrap() {
    this.logger.log('onApplicationBootstrap');
    await this.fillCacheUsingLastEntries();
    this.setupChangeStream();
  }

  async beforeApplicationShutdown() {
    this.logger.log('beforeApplicationShutdown');
    await this.changeStream?.close();
  }

  async stream(token?: string): Promise<Observable<FactcheckEvent>> {
    const maybeEntity = await this.factcheckModel.findById(token);
    if(!maybeEntity)
      throw new NotFoundException(`Unable to find factcheck with id(${token})`)
    const clientId = uuid();
    this.logger.debug(`New client ${clientId} connected with token(${token})`);
    const stream = this.cache.stream(clientId, token);
    return stream.pipe(
      finalize(() => {
        this.logger.debug(`Client ${clientId} disconnected`);
      }),
    );
  }
}

export { FactcheckEventStreamingServiceMongo };
