import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { env } from '../Env';
import { MongoUnavailableMiddleware } from './MongoUnavailableMiddleware';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URL)],
})
class MongoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MongoUnavailableMiddleware).forRoutes('*');
  }
}

export { MongoModule };
