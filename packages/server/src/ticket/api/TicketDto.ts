import { ApiProperty, OmitType } from '@nestjs/swagger';

class TicketDto {
  //@ApiObjectIdProperty()
  readonly id: string;

  @ApiProperty()
  readonly url: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly description: string;
}

class CreateTicketDto extends OmitType(TicketDto, ['id']) {}

export { CreateTicketDto, TicketDto };
