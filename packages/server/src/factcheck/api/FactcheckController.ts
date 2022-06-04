import { Body, HttpStatus, Param, Query, Res, Sse } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Model } from 'mongoose';
import { Observable, Subject } from 'rxjs';

import { ApiController, ApiCreate, ApiGet, ApiObjectIdParam, Url, ValidationErrorDto } from '../../shared';
import { Factcheck, FactcheckDocument } from '../database';
import { CreateFactcheckDto, FactcheckDto } from './FactcheckDto';
import { FactcheckEventDto } from './FactcheckEventDto';
import { FactcheckSyncQuery } from './FactcheckSyncQuery';

@ApiController({ path: 'factchecks', name: 'Factcheck', description: 'Operations on factchecks' })
class FactcheckController {
  constructor(@InjectModel(Factcheck.name) private factcheckModel: Model<FactcheckDocument>) {}

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
  async create(@Body() dto: CreateFactcheckDto, @Res() res: Response, @Url() url: URL) {
    const entity = await this.factcheckModel.create(dto);
    this.subject.next(FactcheckEventDto.from(entity));
    res.setHeader('Location', `${url.origin}/api/factchecks/${entity.id}`);
    res.sendStatus(HttpStatus.CREATED);
  }

  @ApiObjectIdParam()
  @ApiGet({ name: 'factcheck', response: FactcheckDto })
  async findById(@Param('id') id: string) {
    const entity = await this.factcheckModel.findById(id);
    if (!entity) return null;
    return plainToInstance(FactcheckDto, entity);
  }
}

export { FactcheckController };
