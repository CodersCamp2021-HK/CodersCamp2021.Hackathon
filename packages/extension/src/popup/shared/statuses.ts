import { FactcheckStatusEnum } from '@faktyczka/sdk';

import checkmark from '../images/checkmark.svg';
import cross from '../images/cross.svg';
import exclamation from '../images/exclamation.svg';
import question from '../images/question.svg';
import { colors as allColors } from './theme';
const colors = allColors.status;

class Status {
  public static Truth = new Status('Prawda', colors.truth, checkmark);
  public static Fake = new Status('Fałsz', colors.fake, cross);
  public static Warning = new Status('Ostrzeżenie', colors.warning, exclamation);
  public static Unverifiable = new Status('Nieweryfikowalny', colors.unverifiable, question);

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

  private constructor(public readonly text: string, public readonly color: string, public readonly iconPath: string) {}
}

export { Status };
