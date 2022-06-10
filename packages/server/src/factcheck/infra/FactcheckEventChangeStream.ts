import { Logger } from '@nestjs/common';
import { ChangeStream, ChangeStreamDocument, Document, ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { FactcheckDocument } from '../database';
import { FactcheckEvent } from '../domain';

type ChangeStreamWithId<TSchema extends Document = Document> = ChangeStream<TSchema> & { readonly streamId: string };
type ResumeContext = Readonly<{ eventId: string; resumeToken: ObjectId }>;

class FactcheckEventChangeStream {
  private readonly logger = new Logger(FactcheckEventChangeStream.name);
  private readonly onEvent: (event: ChangeStreamDocument<FactcheckEvent>) => void;
  private readonly onError: (error: Error) => void;
  private readonly onClose: () => void;
  private changeStream?: ChangeStreamWithId<FactcheckEvent>;
  private resumeContext?: ResumeContext;

  constructor(private readonly factcheckModel: Model<FactcheckDocument>, onEvent: (event: FactcheckEvent) => void) {
    this.onEvent = (change) => {
      if (change.fullDocument) {
        try {
          this.resumeContext = { eventId: change.fullDocument.id.toString(), resumeToken: change._id };
          const event = { ...change.fullDocument, id: change.fullDocument.id.toString() };
          onEvent(event);
        } catch (e) {
          this.logger.error(e);
        }
      }
    };
    this.onError = (error) => {
      this.logger.error(error);
      this.reconnect();
    };
    this.onClose = () => {
      this.reconnect();
    };
  }

  async open() {
    if (this.changeStream && !this.changeStream.closed) {
      return;
    }

    this.changeStream = this.createChangeStream();
    this.changeStream.on('change', this.onEvent);
    this.changeStream.on('error', this.onError);
    this.changeStream.on('close', this.onClose);
  }

  async close() {
    if (!this.changeStream) {
      return;
    }

    const changeStream = this.changeStream;
    changeStream.removeAllListeners();
    this.changeStream = undefined;
    await changeStream.close();
    this.logger.debug(`Mongodb ChangeStream(${changeStream.streamId}) closed`);
  }

  private async reconnect() {
    await this.close();
    await this.open();
  }

  private createChangeStream(): ChangeStreamWithId<FactcheckEvent> {
    const changeStream = this.factcheckModel.watch<FactcheckEvent>(WATCH_PIPELINE, {
      resumeAfter: this.resumeContext?.resumeToken,
    });
    const streamId = uuid();
    (changeStream as unknown as { streamId: string }).streamId = streamId;
    this.logger.debug(
      `Mongodb ChangeStream(${streamId}) created using resumeToken(${this.resumeContext?.eventId ?? 'empty'})`,
    );
    return changeStream as ChangeStreamWithId<FactcheckEvent>;
  }
}

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

export { FactcheckEventChangeStream };
