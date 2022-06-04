import { FactcheckDto } from '@faktyczka/sdk';

type StorageItem = FactcheckDto & { inHistory: boolean };

export type { StorageItem };
