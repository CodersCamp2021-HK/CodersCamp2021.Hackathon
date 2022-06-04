import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

const URL_CONSTANTS = Object.freeze({
  REGEX: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  MAX_LEN: 1000,
});

function ApiUrlProperty(rest?: ApiPropertyOptions): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      type: 'string',
      format: URL_FORMAT_KEY,
      maxLength: URL_CONSTANTS.MAX_LEN,
      example: 'https://twitter.com/JkmMikke/status/1511628185150136325',
      description: 'RFC 3886 standard url format',
      ...rest,
    }),
  );
}

function isValidHttpUrl(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}

const URL_FORMAT_KEY = 'url';

const ApiUrlFormat = Object.freeze({
  name: URL_FORMAT_KEY,
  type: 'string' as const,
  validate: (v: string) => isValidHttpUrl(v),
});

export { ApiUrlFormat, ApiUrlProperty };
