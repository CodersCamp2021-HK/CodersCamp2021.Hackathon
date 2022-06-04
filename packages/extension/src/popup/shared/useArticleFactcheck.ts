import { FactcheckDto } from '@faktyczka/sdk';
import { useEffect, useState } from 'react';

import { StorageFactchecks } from './storageFactchecks';

/**
 * Returns `undefined` when factcheck was not yet checked, `null` when there isn't a factcheck for a given
 * url and `FactcheckDto` when there is data available.
 */
const useArticleFactcheck = (url: string) => {
  const [articleInfo, setArticleInfo] = useState<FactcheckDto | null | undefined>(undefined);

  useEffect(() => {
    setArticleInfo(undefined);
    chrome.storage.sync.get(['factchecks']).then(({ factchecks }) => {
      const factcheck = ((factchecks as StorageFactchecks) ?? []).find((fc) => fc.url === url);
      setArticleInfo(factcheck ?? null);
    });
  }, [url]);

  return articleInfo;
};

export { useArticleFactcheck };
