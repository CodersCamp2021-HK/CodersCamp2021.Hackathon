import { FactcheckDto } from '@faktyczka/sdk';
import { useEffect } from 'react';

type StorageFactchecks = (FactcheckDto & { inHistory: boolean })[];

const readFactchecks = async () => {
  const storageObj = await chrome.storage.local.get();

  return Object.entries(storageObj)
    .filter(([key]) => key.startsWith('fc#'))
    .map((entry) => entry[1]) as StorageFactchecks;
};

const addFactcheck = async (factcheck: StorageFactchecks[number]) =>
  chrome.storage.local.set({ [`fc#${factcheck.id}`]: factcheck });

const useOnFactchecksChange = (onChange: (newValue: StorageFactchecks) => void) => {
  useEffect(() => {
    const handleChange = (changes: chrome.storage.StorageChange, area: 'sync' | 'local' | 'managed') => {
      for (const [key, { newValue }] of Object.entries(changes)) {
        if (key === 'factchecks' && area === 'local') {
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

export { addFactcheck, readFactchecks, useOnFactchecksChange };
export type { StorageFactchecks };
