import { SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

type TicketDocument = Ticket & Document<ObjectId>;

class Ticket {}

const TicketSchema = SchemaFactory.createForClass(Ticket);

export type { TicketDocument };
export { Ticket, TicketSchema };
