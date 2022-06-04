import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

import { URL_CONSTANTS } from '../../shared';
import { FACTCHECK_CONSTANTS, FactcheckStatus } from '../domain';

type FactcheckDocument = Factcheck & Document<ObjectId>;

@Schema({
  collection: 'factchecks',
  timestamps: true,
})
class Factcheck {
  readonly id: string;

  @Prop({
    required: true,
    unique: true,
    maxlength: URL_CONSTANTS.MAX_LEN,
  })
  readonly url: string;

  @Prop({ required: true })
  readonly status: FactcheckStatus;

  @Prop({
    required: true,
    minLength: FACTCHECK_CONSTANTS.verifiedBy.minLength,
    maxLength: FACTCHECK_CONSTANTS.verifiedBy.maxLength,
  })
  readonly verifiedBy: string;

  @Prop({ required: true, maxlength: URL_CONSTANTS.MAX_LEN })
  readonly verificationSrc: string;

  @Prop({
    required: true,
    minLength: FACTCHECK_CONSTANTS.description.minLength,
    maxLength: FACTCHECK_CONSTANTS.description.maxLength,
  })
  readonly description: string;

  readonly createdAt: Date;
}

const FactcheckSchema = SchemaFactory.createForClass(Factcheck);

export type { FactcheckDocument };
export { Factcheck, FactcheckSchema };
