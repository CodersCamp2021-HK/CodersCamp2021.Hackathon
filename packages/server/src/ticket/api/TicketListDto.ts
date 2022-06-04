import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { TicketDto } from './TicketDto';

class TicketListDto {
  @Type(() => TicketDto)
  @ApiProperty({ type: [TicketDto] })
  data: TicketDto[];

  @ApiProperty()
  pages: number;
}

export { TicketListDto };
