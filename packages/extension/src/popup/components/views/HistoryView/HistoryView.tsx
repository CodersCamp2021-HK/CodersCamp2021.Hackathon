import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { readFactchecks, StorageFactchecks, useOnFactchecksChange } from '../../../../shared';
import { Notification } from '../../../components/Notification';

const HistoryView = () => {
  const [history, setHistory] = useState<StorageFactchecks>([]);

  useEffect(() => {
    readFactchecks().then((factchecks) => setHistory(factchecks.filter(({ inHistory }) => inHistory)));
  }, []);

  useOnFactchecksChange((newFactchecks) => setHistory(newFactchecks.filter(({ inHistory }) => inHistory)));

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
