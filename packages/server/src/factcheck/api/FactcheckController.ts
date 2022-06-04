import { Body, ConflictException, HttpStatus, Param, Query, Res, Sse } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Observable, Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { ApiController, ApiCreate, ApiGet, Url, ValidationErrorDto } from '../../shared';
import { CreateFactcheckDto, FactcheckDto } from './FactcheckDto';
import { FactcheckEventDto } from './FactcheckEventDto';
import { FactcheckSyncQuery } from './FactcheckSyncQuery';

@ApiController({ path: 'factchecks', name: 'Factcheck', description: 'Operations on factchecks' })
class FactcheckController {
  private readonly repository = new Map<string, FactcheckDto>();
  private readonly subject = new Subject<FactcheckEventDto>();

  @Sse('sync')
  @ApiOperation({
    summary: 'Synchronize with server.',
    description: 'Synchronize with server.',
  })
  @ApiOkResponse({
    type: FactcheckEventDto,
    description: `Successfully initialized sse stream of factchecks.`,
  })
  @ApiBadRequestResponse({
    description: `Parameters are not valid or they are missing.`,
    type: ValidationErrorDto,
  })
  sync(@Query() query: FactcheckSyncQuery): Observable<FactcheckEventDto> {
    return this.subject.asObservable();
  }

  @ApiCreate({ name: 'factcheck' })
  create(@Body() dto: CreateFactcheckDto, @Res() res: Response, @Url() url: URL) {
    const id = uuid();
    if ([...this.repository.values()].find((x) => x.url === dto.url) !== undefined) {
      throw new ConflictException('Unique url violation');
    }
    const entity = { id, ...dto };
    this.repository.set(id, entity);
    this.subject.next({
      data: {
        id: entity.id,
        status: entity.status,
        url: entity.url,
      },
      id: entity.id,
      type: 'factcheck',
    });
    res.setHeader('Location', `${url.origin}/api/factchecks/${id}`);
    res.sendStatus(HttpStatus.CREATED);
  }

  //@ApiObjectIdParam()
  @ApiGet({ name: 'factcheck', response: FactcheckDto })
  findById(@Param('id') id: string) {
    return plainToInstance(FactcheckDto, this.repository.get(id)) ?? null;
  }
}

export { FactcheckController };
