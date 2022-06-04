import { Module } from '@nestjs/common';

import { AppConfigModule } from './config';
import { FactcheckModule } from './factcheck';
import { TicketModule } from './ticket';

const featureModules = [FactcheckModule, TicketModule];

@Module({
  imports: [AppConfigModule, ...featureModules],
})
export class AppModule {}
