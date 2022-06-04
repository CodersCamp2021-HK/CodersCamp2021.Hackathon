import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TicketController } from './api';
import { Ticket, TicketSchema } from './database';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }])],
  controllers: [TicketController],
  providers: [],
})
class TicketModule {}

export { TicketModule };
