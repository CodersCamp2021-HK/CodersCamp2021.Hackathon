import { FactcheckStatus } from './FactcheckStatus';

interface FactcheckEvent {
  readonly id: string;
  readonly status: FactcheckStatus;
  readonly url: string;
}

export type { FactcheckEvent };
