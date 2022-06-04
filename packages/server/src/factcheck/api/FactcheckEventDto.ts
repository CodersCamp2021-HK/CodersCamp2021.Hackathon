import { ApiProperty } from '@nestjs/swagger';

import { ApiObjectIdProperty } from '../../shared';
import { Factcheck } from '../database';
import { FactcheckStatus } from '../domain';

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
  readonly status: string;
}

class FactcheckEventDto {
  @ApiObjectIdProperty()
  readonly id: string;

  @ApiProperty()
  readonly data: FactcheckDataDto;

  @ApiProperty({ enum: ['factcheck'] })
  readonly type: 'factcheck';

  static from(entity: Factcheck): FactcheckEventDto {
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
