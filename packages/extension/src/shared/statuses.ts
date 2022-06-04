import { FactcheckStatusEnum } from '@faktyczka/sdk';

import checkmark from '../popup/images/checkmark.svg';
import cross from '../popup/images/cross.svg';
import exclamation from '../popup/images/exclamation.svg';
import question from '../popup/images/question.svg';
import { colors as allColors } from '../popup/shared';
const colors = allColors.status;

class Status {
  public static Truth = new Status('Prawda', colors.truth, checkmark, 'truthBadge');
  public static Fake = new Status('Fałsz', colors.fake, cross, 'fakeBadge');
  public static Warning = new Status('Ostrzeżenie', colors.warning, exclamation, 'warningBadge');
  public static Unverifiable = new Status('Nieweryfikowalny', colors.unverifiable, question, 'unverifiableBadge');

  public static deserialize(status: FactcheckStatusEnum) {
    switch (status) {
      case 'Truth':
        return Status.Truth;
      case 'Fake':
        return Status.Fake;
      case 'Unverifable':
        return Status.Unverifiable;
      case 'Warning':
        return Status.Warning;
    }
  }

  private constructor(
    public readonly text: string,
    public readonly color: string,
    public readonly iconPath: string,
    public readonly badgePath: string,
  ) {}
}

export { Status };
