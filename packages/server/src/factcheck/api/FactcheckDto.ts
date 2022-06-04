import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

import { ApiObjectIdProperty, ApiUrlProperty } from '../../shared';
import { FACTCHECK_CONSTANTS, FactcheckStatus } from '../domain';

@Exclude()
class FactcheckDto {
  @Expose()
  @ApiObjectIdProperty()
  readonly id: string;

  @Expose()
  @ApiUrlProperty()
  readonly url: string;

  @Expose()
  @ApiProperty({
    enum: FactcheckStatus,
    enumName: 'FactcheckStatusEnum',
    example: [FactcheckStatus.Truth, FactcheckStatus.Fake, FactcheckStatus.Warning, FactcheckStatus.Unverifable],
  })
  readonly status: FactcheckStatus;

  @Expose()
  @ApiProperty({
    minLength: FACTCHECK_CONSTANTS.verifiedBy.minLength,
    maxLength: FACTCHECK_CONSTANTS.verifiedBy.maxLength,
    example: 'demagog@.org.pl',
  })
  readonly verifiedBy: string;

  @Expose()
  @ApiUrlProperty({
    example: 'https://demagog.org.pl/wypowiedzi/w-mariupolu-doszlo-do-tragedii-janusz-korwin-mikke-powiela-fake-newsy/',
  })
  readonly verificationSrc: string;

  @Expose()
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
