import { FactcheckDto } from '@faktyczka/sdk';

type StorageFactchecks = (FactcheckDto & { inHistory: boolean })[];

export type { StorageFactchecks };
