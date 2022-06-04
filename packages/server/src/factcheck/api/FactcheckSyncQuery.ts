import { ApiObjectIdProperty } from '../../shared';

class FactcheckSyncQuery {
  @ApiObjectIdProperty({ required: false })
  readonly token?: string;
}

export { FactcheckSyncQuery };
