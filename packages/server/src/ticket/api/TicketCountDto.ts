import { ApiProperty } from '@nestjs/swagger';

class TicketCountDto {
  @ApiProperty({ minimum: 0 })
  count: number;
}

export { TicketCountDto };
