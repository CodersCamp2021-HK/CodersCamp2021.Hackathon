import { Module } from '@nestjs/common';

import { AppConfigModule } from './config';
import { FactcheckModule } from './factcheck';

const featureModules = [FactcheckModule];

@Module({
  imports: [AppConfigModule, ...featureModules],
})
export class AppModule {}
