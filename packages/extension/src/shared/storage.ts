import { FactcheckDto } from '@faktyczka/sdk';
import { useEffect } from 'react';

type StorageFactchecks = (FactcheckDto & { inHistory: boolean })[];

const readFactchecks = async () => {
  const storageObj = await chrome.storage.local.get();

  return Object.entries(storageObj)
    .filter(([key]) => key.startsWith('fc#'))
    .map((entry) => entry[1]) as StorageFactchecks;
};

const hasFactcheck = async (id: string) => {
  const items = await chrome.storage.local.get([`fc#${id}`]);
  return Object.keys(items).length > 0;
};

const addFactcheck = async (factcheck: StorageFactchecks[number]) =>
  chrome.storage.local.set({ [`fc#${factcheck.id}`]: factcheck });

const useNewFactcheckListener = (onNew: () => void) => {
  useEffect(() => {
    const handleChange = (changes: chrome.storage.StorageChange, area: 'sync' | 'local' | 'managed') => {
      for (const [key] of Object.entries(changes)) {
        if (key.startsWith('fc#') && area === 'local') {
          onNew();
        }
      }
    };

    chrome.storage.onChanged.addListener(handleChange);
    return () => {
      chrome.storage.onChanged.removeListener(handleChange);
    };
  }, [onNew]);
};

export { addFactcheck, hasFactcheck, readFactchecks, useNewFactcheckListener };
export type { StorageFactchecks };
