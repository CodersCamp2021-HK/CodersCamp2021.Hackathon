import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

import { ApiEmailProperty, ApiObjectIdProperty, ApiUrlProperty } from '../../shared';
import { TICKET_CONSTANTS } from '../domain';

@Exclude()
class TicketDto {
  @Expose()
  @ApiObjectIdProperty()
  readonly id: string;

  @Expose()
  @ApiUrlProperty()
  readonly url: string;

  @Expose()
  @ApiProperty({
    minLength: TICKET_CONSTANTS.description.minLength,
    maxLength: TICKET_CONSTANTS.description.maxLength,
    example: 'Jan Kowalski',
  })
  readonly name: string;

  @Expose()
  @ApiEmailProperty({
    example: 'jan.kowalski@email.com',
  })
  readonly email: string;

  @Expose()
  @ApiProperty({
    minLength: TICKET_CONSTANTS.description.minLength,
    maxLength: TICKET_CONSTANTS.description.maxLength,
    example:
      'Przedstawiony artykuł zawiera fałszywe informację, proszę sprawdzić tą stronę https://www.ohchr.org/en/statements/2022/03/situation-ukraine',
    required: false,
  })
  readonly description: string;
}

class CreateTicketDto extends OmitType(TicketDto, ['id']) {}

export { CreateTicketDto, TicketDto };
