import { SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';

type FactcheckDocument = Factcheck & Document<ObjectId>;

class Factcheck {}

const FactcheckSchema = SchemaFactory.createForClass(Factcheck);

export type { FactcheckDocument };
export { Factcheck, FactcheckSchema };
