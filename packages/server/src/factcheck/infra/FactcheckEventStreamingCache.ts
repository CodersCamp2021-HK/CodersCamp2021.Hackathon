import { Logger } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Observable, Subscriber } from 'rxjs';

import { FactcheckEvent } from '../domain/FactcheckEvent';

class FactcheckEventStreamingCache {
  private readonly logger = new FactcheckEventStreamingCacheLogger(this);
  private readonly subscribers: Set<Subscriber<FactcheckEvent>> = new Set();
  private readonly buffer: (FactcheckEvent | undefined)[] = [];
  private ptr = 0;

  constructor(readonly size: number) {
    if (size <= 0) {
      throw new Error('Cache size can be only positive integer');
    }
    this.buffer = [...Array(size)];
  }

  put(event: FactcheckEvent) {
    this.logger.logPut(event);
    this.buffer[this.ptr++] = event;
    this.ptr %= this.size;
    this.subscribers.forEach((sub) => sub.next(event));
  }

  stream(clientId: string, token?: string): Observable<FactcheckEvent> {
    return new Observable((subscribe) => {
      const logger = this.logger.getStreamLogger(clientId, token);
      if (!this.isHead(token)) {
        const idx = this.getIdxForToken(token);
        logger.logSelected(idx);
        if (idx === -1) {
          throw new Error('Cache miss');
        }
        const cachedRecords = this.getAfter(idx);
        logger.logSending(cachedRecords);
        cachedRecords.forEach((x) => subscribe.next(x));
      }

      this.subscribers.add(subscribe);

      return () => {
        this.subscribers.delete(subscribe);
        subscribe.complete();
        logger.logComplete();
      };
    });
  }

  isCacheHit(token?: string) {
    return token !== undefined && new ObjectId(token) >= new ObjectId(this.tail?.id);
  }

  get head() {
    return this.ptr === 0 ? this.buffer[this.size - 1] : this.buffer[this.ptr - 1];
  }

  get tail() {
    return this.buffer[this.ptr] === undefined ? this.buffer[0] : this.buffer[this.ptr];
  }

  get empty() {
    return this.ptr === 0 && this.buffer[this.ptr] === undefined;
  }

  get count() {
    return this.empty ? 0 : this.buffer[this.ptr] === undefined ? this.ptr : this.size;
  }

  get full() {
    return this.count === this.size;
  }

  get pos() {
    return this.ptr;
  }

  private isHead(token?: string) {
    return this.empty || (token !== undefined && this.head?.id === token);
  }

  private getAfter(idx: number): FactcheckEvent[] {
    if (idx < 0) throw new Error('Invalid argument idx, expceted greather than 0');
    if (this.empty) return [];
    if (this.count < this.size) return this.buffer.slice(idx, this.ptr) as FactcheckEvent[];
    if (idx < this.ptr) return this.buffer.slice(idx, this.ptr) as FactcheckEvent[];
    return [...this.buffer.slice(idx, this.size), ...this.buffer.slice(0, this.ptr)] as FactcheckEvent[];
  }

  private getIdxForToken(token?: string) {
    const tailIdx = !this.full ? 0 : this.ptr;
    return !token ? tailIdx : (this.buffer.findIndex((x) => x?.id === token) + 1) % this.size;
  }
}

class FactcheckEventStreamingCacheLogger {
  private readonly logger = new Logger(FactcheckEventStreamingCache.name);

  constructor(private readonly cache: FactcheckEventStreamingCache) {}

  logPut(event: FactcheckEvent) {
    if (this.cache.full) {
      this.logger.debug(
        `New event(${event.id}) added at position (${this.cache.pos}) replacing (${
          this.cache.tail?.id ?? 'undefined'
        })`,
      );
    } else {
      this.logger.debug(`New event(${event.id}) added to cache (${this.cache.count + 1}/${this.cache.size})`);
    }
  }

  getStreamLogger(clientId: string, token?: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const debug = (msg: any) => this.logger.debug(msg);
    debug(`Client(${clientId}): opening cache stream with token(${token ?? 'empty'})`);
    return Object.freeze({
      logComplete() {
        debug(`Client(${clientId}): completed cache stream`);
      },
      logSelected(idx: number) {
        debug(`Client(${clientId}): selected cacheIdx(${idx})`);
        if (idx === -1) {
          debug(`Client(${clientId}): cache miss`);
        }
      },
      logSending(cachedRecords: FactcheckEvent[]) {
        debug(`Client(${clientId}): sending cached records ${formatBatch(cachedRecords)}`);
      },
    });
  }
}

function formatBatch(batch: FactcheckEvent[]) {
  return batch.length === 0 ? 'empty' : `from(${batch[0].id}) to(${batch[batch.length - 1].id}) len(${batch.length})`;
}

export { FactcheckEventStreamingCache };
