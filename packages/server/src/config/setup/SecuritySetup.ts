import { INestApplication } from '@nestjs/common';
import helmet from 'helmet';

import { env } from '../Env';

function setupSecurity(app: INestApplication) {
  app.enableCors({ credentials: true });

  if (env.NODE_ENV === 'production') {
    app.use(helmet());
  }

  return app;
}

export { setupSecurity };
