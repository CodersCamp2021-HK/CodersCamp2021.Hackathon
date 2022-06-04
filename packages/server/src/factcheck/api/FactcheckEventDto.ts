import { ApiProperty } from '@nestjs/swagger';

import { ApiObjectIdProperty } from '../../shared';
import { FactcheckStatus } from '../domain';

class FactcheckDataDto {
  //@ApiObjectIdProperty()
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
  //@ApiObjectIdProperty()
  readonly id: string;

  @ApiProperty()
  readonly data: FactcheckDataDto;

  @ApiProperty({ enum: ['factcheck'] })
  readonly type: 'factcheck';
}

export { FactcheckEventDto };
