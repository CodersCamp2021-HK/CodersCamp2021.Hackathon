import { ApiProperty } from '@nestjs/swagger';

import { ApiObjectIdProperty } from '../../shared';
import { Factcheck } from '../database';
import { FactcheckEvent, FactcheckStatus } from '../domain';

class FactcheckDataDto {
  @ApiObjectIdProperty()
  readonly id: string;

  @ApiProperty()
  readonly url: string;

  @ApiProperty({
    enum: FactcheckStatus,
    enumName: 'FactcheckStatusEnum',
    example: [FactcheckStatus.Truth, FactcheckStatus.Fake, FactcheckStatus.Warning, FactcheckStatus.Unverifable],
  })
  readonly status: FactcheckStatus;
}

class FactcheckEventDto {
  @ApiObjectIdProperty()
  readonly id: string;

  @ApiProperty()
  readonly data: FactcheckDataDto;

  @ApiProperty({ enum: ['factcheck'] })
  readonly type: 'factcheck';

  static from(entity: FactcheckEvent): FactcheckEventDto {
    return {
      data: {
        id: entity.id,
        status: entity.status,
        url: entity.url,
      },
      id: entity.id,
      type: 'factcheck',
    };
  }
}

export { FactcheckEventDto };
