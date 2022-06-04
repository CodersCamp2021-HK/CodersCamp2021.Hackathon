import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FactcheckController } from './api';
import { Factcheck, FactcheckSchema } from './database';
import { FactcheckEventStreamingService } from './domain';
import { FactcheckEventStreamingServiceMongo } from './infra';

const FactcheckEventStreamingServiceProvider: Provider = {
  provide: FactcheckEventStreamingService,
  useExisting: FactcheckEventStreamingServiceMongo,
};

@Module({
  imports: [MongooseModule.forFeature([{ name: Factcheck.name, schema: FactcheckSchema }])],
  controllers: [FactcheckController],
  providers: [FactcheckEventStreamingServiceProvider, FactcheckEventStreamingServiceMongo],
})
class FactcheckModule {}

export { FactcheckModule };
