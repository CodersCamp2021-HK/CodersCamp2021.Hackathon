import { FactcheckDto } from '@faktyczka/sdk';
import { useEffect, useState } from 'react';

import { readFactchecks } from '../../shared';

/**
 * Returns `undefined` when factcheck was not yet checked, `null` when there isn't a factcheck for a given
 * url and `FactcheckDto` when there is data available.
 */
const useArticleFactcheck = (url: string) => {
  const [articleInfo, setArticleInfo] = useState<FactcheckDto | null | undefined>(undefined);

  useEffect(() => {
    setArticleInfo(undefined);
    readFactchecks().then((factchecks) => setArticleInfo(factchecks.find((fc) => fc.url === url) ?? null));
  }, [url]);

  return articleInfo;
};

export { useArticleFactcheck };
