import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';

import { Handler, Paginated, PaginationQuery } from '../../shared';
import { Ticket, TicketDocument } from '../database';

interface ListTicketsByUrlReq extends PaginationQuery {
  readonly url: string;
}

@Injectable()
class ListTicketsByUrlHandler implements Handler<ListTicketsByUrlReq, Paginated<Ticket>> {
  constructor(@InjectModel(Ticket.name) private readonly ticketModel: Model<TicketDocument>) {}

  async exec(req: ListTicketsByUrlReq): Promise<Paginated<Ticket>> {
    const offset = (req.page - 1) * req.limit;
    const queryFilter = { url: req.url };
    const ticketsDocsQuery = this.ticketModel.find(queryFilter).skip(offset).limit(req.limit);
    const countQuery = this.ticketModel.countDocuments();
    const [ticketsDocs, count] = await Promise.all([ticketsDocsQuery.exec(), countQuery.exec()]);
    return { data: plainToInstance(Ticket, ticketsDocs), pages: Math.ceil(count / req.limit) };
  }
}

export { ListTicketsByUrlHandler };
