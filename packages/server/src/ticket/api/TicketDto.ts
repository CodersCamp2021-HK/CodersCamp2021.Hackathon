import { ApiProperty, OmitType } from '@nestjs/swagger';

import { ApiEmailProperty, ApiUrlProperty } from '../../shared';
import { TICKET_CONSTANTS } from '../domain';

class TicketDto {
  //@ApiObjectIdProperty()
  readonly id: string;

  @ApiUrlProperty()
  readonly url: string;

  @ApiProperty({
    minLength: TICKET_CONSTANTS.description.minLength,
    maxLength: TICKET_CONSTANTS.description.maxLength,
    example: 'Jan Kowalski',
  })
  readonly name: string;

  @ApiEmailProperty({
    example: 'jan.kowalski@email.com',
  })
  readonly email: string;

  @ApiProperty({
    minLength: TICKET_CONSTANTS.description.minLength,
    maxLength: TICKET_CONSTANTS.description.maxLength,
    example:
      'Przedstawiony artykuł zawiera fałszywe informację, proszę sprawdzić tą stronę https://www.ohchr.org/en/statements/2022/03/situation-ukraine',
  })
  readonly description: string;
}

class CreateTicketDto extends OmitType(TicketDto, ['id']) {}

export { CreateTicketDto, TicketDto };
