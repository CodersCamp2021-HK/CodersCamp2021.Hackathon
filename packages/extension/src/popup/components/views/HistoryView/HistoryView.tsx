import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { Notification } from '../../../components/Notification';
import { StorageFactchecks } from '../../../shared';

const HistoryView = () => {
  const [history, setHistory] = useState<StorageFactchecks>([]);

  useEffect(() => {
    chrome.storage.sync
      .get(['factchecks'])
      .then(({ factchecks }) =>
        setHistory(((factchecks as StorageFactchecks) ?? []).filter(({ inHistory }) => inHistory)),
      );

    const onChange = (changes: chrome.storage.StorageChange, area: 'sync' | 'local' | 'managed') => {
      for (const [key, { newValue }] of Object.entries(changes)) {
        if (key === 'factchecks' && area === 'sync') {
          setHistory(newValue);
        }
      }
    };

    chrome.storage.onChanged.addListener(onChange);
    return () => {
      chrome.storage.onChanged.removeListener(onChange);
    };
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
      {history
        .slice(-10)
        .reverse()
        .map((factcheck) => {
          return <Notification key={factcheck.id} factcheck={factcheck}></Notification>;
        })}
    </div>
  );
};

export { HistoryView };
