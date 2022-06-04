import { ApiProperty } from '@nestjs/swagger';

import { ApiController, ApiGet } from '../shared';

class HelloDto {
  @ApiProperty({ example: 'Hello' })
  readonly msg: string;
}

@ApiController({
  path: 'hello',
  name: 'Hello',
  description: 'Hello operations',
})
export class HelloController {
  @ApiGet({ path: '', response: HelloDto })
  getHello() {
    return { msg: 'Hello' };
  }
}
