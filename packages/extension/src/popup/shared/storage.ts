import { FactcheckDto } from '@faktyczka/sdk';
import { useEffect } from 'react';

type StorageFactchecks = (FactcheckDto & { inHistory: boolean })[];

const readFactchecks = async () => {
  const { factchecks } = await chrome.storage.sync.get(['factchecks']);
  return (factchecks ?? []) as StorageFactchecks;
};

const storeFactchecks = async (factchecks: StorageFactchecks) => chrome.storage.sync.set({ factchecks });

const useOnFactchecksChange = (onChange: (newValue: StorageFactchecks) => void) => {
  useEffect(() => {
    const handleChange = (changes: chrome.storage.StorageChange, area: 'sync' | 'local' | 'managed') => {
      for (const [key, { newValue }] of Object.entries(changes)) {
        if (key === 'factchecks' && area === 'sync') {
          onChange(newValue);
        }
      }
    };

    chrome.storage.onChanged.addListener(handleChange);
    return () => {
      chrome.storage.onChanged.removeListener(handleChange);
    };
  }, [onChange]);
};

export { readFactchecks, storeFactchecks, useOnFactchecksChange };
export type { StorageFactchecks };
