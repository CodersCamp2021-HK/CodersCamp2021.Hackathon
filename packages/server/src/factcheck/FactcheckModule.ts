import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FactcheckController } from './api';
import { Factcheck, FactcheckSchema } from './database';

@Module({
  imports: [MongooseModule.forFeature([{ name: Factcheck.name, schema: FactcheckSchema }])],
  controllers: [FactcheckController],
  providers: [],
})
class FactcheckModule {}

export { FactcheckModule };
