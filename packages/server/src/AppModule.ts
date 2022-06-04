import { Module } from '@nestjs/common';

import { AppConfigModule } from './config';
import { HelloModule } from './hello';

const featureModules = [HelloModule];

@Module({
  imports: [AppConfigModule, ...featureModules],
})
export class AppModule {}
