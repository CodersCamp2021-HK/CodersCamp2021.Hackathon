import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { Notification } from '../../../components/Notification';
import { StorageItem } from '../../../shared';

const HistoryView = () => {
  const [history, setHistory] = useState<StorageItem[]>([]);

  useEffect(() => {
    chrome.storage.sync
      .get(['factchecks'])
      .then(({ factchecks }) => setHistory(((factchecks as StorageItem[]) ?? []).filter(({ inHistory }) => inHistory)));
  }, []);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 15px;
        max-height: 350px;
        overflow-y: scroll;
      `}
    >
      {history.map((factcheck) => {
        return <Notification key={factcheck.id} factcheck={factcheck}></Notification>;
      })}
    </div>
  );
};

export { HistoryView };
