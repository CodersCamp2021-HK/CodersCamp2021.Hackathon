import { Module } from '@nestjs/common';

import { HelloController } from './HelloController';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [],
})
export class HelloModule {}
