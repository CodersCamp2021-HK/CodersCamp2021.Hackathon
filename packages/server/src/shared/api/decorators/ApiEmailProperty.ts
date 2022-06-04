import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

const EMAIL_CONSTANTS = Object.freeze({
  REGEX:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  MAX_LEN: 64,
});

function ApiEmailProperty(rest?: ApiPropertyOptions): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      type: 'string',
      format: EMAIL_FORMAT_KEY,
      maxLength: EMAIL_CONSTANTS.MAX_LEN,
      example: 'user@email.com',
      description: 'RFC 5322 standard email format',
      ...rest,
    }),
  );
}

const EMAIL_FORMAT_KEY = 'email';

const ApiEmailFormat = Object.freeze({
  name: EMAIL_FORMAT_KEY,
  type: 'string' as const,
  validate: (v: string) => EMAIL_CONSTANTS.REGEX.test(v),
});

export { ApiEmailFormat, ApiEmailProperty };
