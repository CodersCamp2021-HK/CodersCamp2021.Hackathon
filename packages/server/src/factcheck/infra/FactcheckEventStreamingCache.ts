import { Logger } from '@nestjs/common';
import { Observable, Subscriber } from 'rxjs';

import { FactcheckEvent } from '../domain/FactcheckEvent';

function formatCachedRecordsLog(cachedRecords: FactcheckEvent[]) {
  return cachedRecords.length === 0
    ? 'empty'
    : `from(${cachedRecords[0].id}) to(${cachedRecords[cachedRecords.length - 1].id}) len(${cachedRecords.length})`;
}

class FactcheckEventStreamingCache {
  private readonly logger = new Logger(FactcheckEventStreamingCache.name);
  private readonly subscribers: Set<Subscriber<FactcheckEvent>> = new Set();
  private readonly buffer: (FactcheckEvent | undefined)[] = [];
  private ptr: number;

  constructor(readonly size: number) {
    if (size <= 0) {
      throw new Error('Cache size can be only positive integer');
    }
    this.buffer = [...Array(size)];
    this.ptr = 0;
  }

  put(event: FactcheckEvent) {
    this.buffer[this.ptr++] = event;
    this.ptr %= this.size;
    this.logger.debug(`New event(${event.id}) added to cache (${this.count}/${this.size})`);
    this.subscribers.forEach((sub) => sub.next(event));
  }

  stream(clientId: string, token?: string): Observable<FactcheckEvent> {
    this.logger.debug(`Client(${clientId}) opening cache stream with token(${token})`);
    return new Observable((subscribe) => {
      if (!this.empty) {
        const tailIdx = !this.full ? 0 : this.ptr;
        const idx = !token ? tailIdx : this.buffer.findIndex((x) => x?.id === token);
        this.logger.debug(`Selected for client(${clientId}) cacheIdx(${idx})`);
        if (idx === -1) {
          this.logger.debug(`Cache miss for client(${clientId})`);
          throw new Error('Cache miss');
        }
        const cachedRecords = this.getAfter(idx);
        this.logger.debug(`Sending cached records to client(${clientId}) ${formatCachedRecordsLog(cachedRecords)}`);
        cachedRecords.forEach((x) => subscribe.next(x));
      }

      this.subscribers.add(subscribe);

      return () => {
        this.subscribers.delete(subscribe);
        subscribe.complete();
      };
    });
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

  private getAfter(idx: number): FactcheckEvent[] {
    if (this.empty) return [];
    if (this.count < this.size) return this.buffer.slice(idx + 1, this.ptr) as FactcheckEvent[];
    if (idx < this.ptr) return this.buffer.slice(idx, this.ptr) as FactcheckEvent[];
    return [...this.buffer.slice(idx, this.size), ...this.buffer.slice(idx, this.ptr)] as FactcheckEvent[];
  }
}

export { FactcheckEventStreamingCache };
