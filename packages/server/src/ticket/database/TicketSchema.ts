import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

import { EMAIL_CONSTANTS, URL_CONSTANTS } from '../../shared';
import { TICKET_CONSTANTS } from '../domain';

type TicketDocument = Ticket & Document<ObjectId>;

@Exclude()
@Schema({
  collection: 'tickets',
  timestamps: true,
})
class Ticket {
  @Expose()
  readonly id: string;

  @Expose()
  @Prop({
    maxlength: URL_CONSTANTS.MAX_LEN,
  })
  readonly url: string;

  @Expose()
  @Prop({
    minLength: TICKET_CONSTANTS.description.minLength,
    maxLength: TICKET_CONSTANTS.description.maxLength,
  })
  readonly name: string;

  @Expose()
  @Prop({
    match: EMAIL_CONSTANTS.REGEX,
    maxlength: EMAIL_CONSTANTS.MAX_LEN,
  })
  readonly email: string;

  @Expose()
  @Prop({
    required: false,
    minLength: TICKET_CONSTANTS.description.minLength,
    maxLength: TICKET_CONSTANTS.description.maxLength,
  })
  readonly description?: string;
}

const TicketSchema = SchemaFactory.createForClass(Ticket);

export type { TicketDocument };
export { Ticket, TicketSchema };
