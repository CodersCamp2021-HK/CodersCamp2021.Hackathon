import { colors as allColors } from './theme';
const colors = allColors.status;

class Status {
  public static Truth = new Status('Prawda', colors.truth);
  public static Fake = new Status('Fałsz', colors.fake);
  public static Warning = new Status('Ostrzeżenie', colors.warning);
  public static Unverifiable = new Status('Nieweryfikowalny', colors.unverifiable);

  private constructor(public readonly text: string, public readonly color: string) {}
}

export { Status };
