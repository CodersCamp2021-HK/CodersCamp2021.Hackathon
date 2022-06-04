import { ApiProperty, OmitType } from '@nestjs/swagger';

import { ApiObjectIdProperty, ApiUrlProperty } from '../../shared';
import { FACTCHECK_CONSTANTS, FactcheckStatus } from '../domain';

class FactcheckDto {
  //@ApiObjectIdProperty()
  readonly id: string;

  @ApiUrlProperty()
  readonly url: string;

  @ApiProperty({
    enum: FactcheckStatus,
    enumName: 'FactcheckStatusEnum',
    example: [FactcheckStatus.Truth, FactcheckStatus.Fake, FactcheckStatus.Warning, FactcheckStatus.Unverifable],
  })
  readonly status: string;

  @ApiProperty({
    minLength: FACTCHECK_CONSTANTS.verifiedBy.minLength,
    maxLength: FACTCHECK_CONSTANTS.verifiedBy.maxLength,
    example: 'demagog@.org.pl',
  })
  readonly verifiedBy: string;

  @ApiUrlProperty({
    example: 'https://demagog.org.pl/wypowiedzi/w-mariupolu-doszlo-do-tragedii-janusz-korwin-mikke-powiela-fake-newsy/',
  })
  readonly verificationSrc: string;

  @ApiProperty({
    minLength: FACTCHECK_CONSTANTS.description.minLength,
    maxLength: FACTCHECK_CONSTANTS.description.maxLength,
    example:
      '9 marca doszło do zbombardowania szpitala w Mariupolu, co oprócz władz ukraińskich potwierdziła Światowa Organizacja Zdrowia (WHO) oraz Biuro Wysokiego Komisarza Narodów Zjednoczonych ds. Praw Człowieka (OHCHR).',
  })
  readonly description: string;
}

class CreateFactcheckDto extends OmitType(FactcheckDto, ['id']) {}

export { CreateFactcheckDto, FactcheckDto };
