import { Body, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { v4 as uuid } from 'uuid';

import {
  ApiController,
  ApiCreate,
  ApiGet,
  ApiList,
  createPaginationLink,
  Pagination,
  PaginationQuery,
  Url,
} from '../../shared';
import { CreateTicketDto, TicketDto } from './TicketDto';
import { TicketListDto } from './TicketListDto';

@ApiController({ path: 'tickets', name: 'Tickets', description: 'Operations on tickets' })
class TicketController {
  private readonly repository = new Map<string, TicketDto[]>();

  @ApiCreate({ name: 'ticket' })
  create(@Body() dto: CreateTicketDto, @Res() res: Response, @Url() url: URL) {
    const id = uuid();
    const ticket = { id, ...dto };
    let tickets = this.repository.get(dto.url);
    if (!tickets) {
      tickets = [];
      this.repository.set(dto.url, tickets);
    }
    tickets.push(ticket);
    res.setHeader('Location', `${url.origin}/api/tickets/${id}`);
    res.sendStatus(HttpStatus.CREATED);
  }

  @ApiGet({ name: 'ticket', response: TicketDto })
  findById(@Param('id') id: string) {
    const maybeTicket = [...this.repository.values()].flatMap((x) => x).filter((x) => x.id === id);
    if (maybeTicket.length === 0) {
      return null;
    }
    return plainToInstance(TicketDto, maybeTicket[0]);
  }

  @ApiQuery({
    name: 'url',
    required: true,
  })
  @ApiList({ name: 'tickets', response: TicketListDto, link: true })
  listTicketsByUrl(
    @Query('url') urlQuery: string,
    @Pagination() pagination: PaginationQuery,
    @Res({ passthrough: true }) res: Response,
    @Url() url: URL,
  ) {
    const raw = this.repository.get(urlQuery) ?? [];
    const paginatedTickets = { pages: raw.length, data: raw };
    res.setHeader('Link', createPaginationLink(url, paginatedTickets.pages));
    return plainToInstance(TicketListDto, paginatedTickets);
  }
}

export { TicketController };
