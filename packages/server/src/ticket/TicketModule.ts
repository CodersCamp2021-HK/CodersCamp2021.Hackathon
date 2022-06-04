import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TicketController } from './api';
import { Ticket, TicketSchema } from './database';
import { ListTicketsByUrlHandler } from './domain';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }])],
  controllers: [TicketController],
  providers: [ListTicketsByUrlHandler],
})
class TicketModule {}

export { TicketModule };
