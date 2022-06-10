import { Logger } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { FilterQuery, Model } from 'mongoose';
import { defer, finalize, from, mergeMap, tap } from 'rxjs';

import { FactcheckDocument } from '../database';
import { FactcheckEvent } from '../domain';

function formatBatch(batch: FactcheckEvent[]) {
  return batch.length === 0 ? 'empty' : `from(${batch[0].id}) to(${batch[batch.length - 1].id}) len(${batch.length})`;
}

function factcheckEventBatchIteratorLogger(clientId: string, token?: string) {
  const logger = new Logger('FactcheckEventBatchIterator');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debug = (msg: any) => logger.debug(msg);
  return Object.freeze({
    logStart() {
      debug(`Client(${clientId}): opening batch stream with token(${token ?? 'empty'})`);
    },
    logBatch(batch: FactcheckEvent[]) {
      debug(`Client(${clientId}): sending batch ${formatBatch(batch)}`);
    },
    logComplete() {
      debug(`Client(${clientId}): completed batch stream`);
    },
  });
}

function greaterThanIdFilter(id: string): FilterQuery<FactcheckDocument> {
  return {
    _id: {
      $gt: new ObjectId(id),
    },
  };
}

async function* factcheckEventBatchIterator(
  factcheckModel: Model<FactcheckDocument>,
  batchSize: number,
  maybeToken?: string,
) {
  if (batchSize < 1) {
    throw new Error("Argument error batchSize can't be smaller than 1");
  }
  let batch: FactcheckEvent[] = [];
  let filter = maybeToken ? greaterThanIdFilter(maybeToken) : {};
  do {
    batch = await factcheckModel
      .find(filter, { _id: 1, url: 1, status: 1 })
      .limit(batchSize)
      .then((x) => x.map((y) => y.toEvent()));

    yield batch;

    filter = batch.length === 0 ? filter : greaterThanIdFilter(batch[batch.length - 1].id);
  } while (batch.length === batchSize);
}

function factcheckEventBatchStream(
  factcheckModel: Model<FactcheckDocument>,
  clientId: string,
  batchSize: number,
  token?: string,
) {
  const logger = factcheckEventBatchIteratorLogger(clientId, token);
  return defer(() => {
    logger.logStart();
    return from(factcheckEventBatchIterator(factcheckModel, batchSize, token)).pipe(
      tap((x) => logger.logBatch(x)),
      mergeMap((x) => x),
      finalize(() => {
        logger.logComplete();
      }),
    );
  });
}

export { factcheckEventBatchStream };
