import { Body, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiQuery } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Model } from 'mongoose';

import {
  ApiController,
  ApiCreate,
  ApiGet,
  ApiList,
  ApiObjectIdParam,
  ApiUrlParam,
  createPaginationLink,
  Pagination,
  PaginationQuery,
  Url,
} from '../../shared';
import { TicketDocument } from '../database';
import { ListTicketsByUrlHandler } from '../domain';
import { TicketCountDto } from './TicketCountDto';
import { CreateTicketDto, TicketDto } from './TicketDto';
import { TicketListDto } from './TicketListDto';

@ApiController({ path: 'tickets', name: 'Tickets', description: 'Operations on tickets' })
class TicketController {
  constructor(
    @InjectModel('Ticket') private readonly ticketModel: Model<TicketDocument>,
    private readonly listTicketsByUrlHandler: ListTicketsByUrlHandler,
  ) {}

  @ApiCreate({ name: 'ticket' })
  async create(@Body() dto: CreateTicketDto, @Res() res: Response, @Url() url: URL) {
    const entity = await this.ticketModel.create(dto);
    res.setHeader('Location', `${url.origin}/api/tickets/${entity.id}`);
    res.sendStatus(HttpStatus.CREATED);
  }

  @ApiObjectIdParam()
  @ApiGet({ name: 'ticket', response: TicketDto })
  async findById(@Param('id') id: string) {
    const entity = await this.ticketModel.findById(id);
    if (!entity) return null;
    return plainToInstance(TicketDto, entity);
  }

  @ApiQuery({
    name: 'url',
    required: true,
  })
  @ApiList({ name: 'tickets', response: TicketListDto, link: true })
  async listTicketsByUrl(
    @Query('url') urlQuery: string,
    @Pagination() pagination: PaginationQuery,
    @Res({ passthrough: true }) res: Response,
    @Url() url: URL,
  ) {
    const paginatedTickets = await this.listTicketsByUrlHandler.exec({ url: urlQuery, ...pagination });
    res.setHeader('Link', createPaginationLink(url, paginatedTickets.pages));
    return plainToInstance(TicketListDto, paginatedTickets);
  }

  @ApiUrlParam()
  @ApiGet({
    path: '/count/:url',
    response: TicketCountDto,
    operation: { summary: 'Retrive number of tickets for specific url' },
  })
  async countTicketsByUrl(@Param('url') url: string) {
    const count = await this.ticketModel.count({ url: url });
    return plainToInstance(TicketCountDto, { count });
  }
}

export { TicketController };
