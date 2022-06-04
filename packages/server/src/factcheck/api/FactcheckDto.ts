import { ApiProperty, OmitType } from '@nestjs/swagger';

import { ApiObjectIdProperty } from '../../shared';
import { FactcheckStatus } from '../domain';

class FactcheckDto {
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

  @ApiProperty()
  readonly verifiedBy: string;

  @ApiProperty()
  readonly verificationSrc: string;

  @ApiProperty()
  readonly description: string;
}

class CreateFactcheckDto extends OmitType(FactcheckDto, ['id']) {}

export { CreateFactcheckDto, FactcheckDto };
