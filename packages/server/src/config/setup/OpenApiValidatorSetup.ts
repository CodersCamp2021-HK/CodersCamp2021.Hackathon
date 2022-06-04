import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { Application } from 'express';
import * as OpenApiValidator from 'express-openapi-validator';
import { Format, OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';

import { ApiEmailFormat, ApiUrlFormat } from '../../shared';
import { env } from '../Env';

const formats: Format[] = [ApiEmailFormat, ApiUrlFormat];

function setupOpenApiValidator(app: INestApplication, apiSpec: OpenAPIObject) {
  const express: Application = app.getHttpAdapter().getInstance();

  express.use(
    '/api',
    bodyParser.json(),
    ...OpenApiValidator.middleware({
      apiSpec: apiSpec as OpenAPIV3.Document,
      validateRequests: {
        allowUnknownQueryParameters: true,
        coerceTypes: false,
      },
      formats,
      validateResponses: env.NODE_ENV !== 'production',
      validateFormats: 'full',
    }),
  );
  return app;
}

export { setupOpenApiValidator };
