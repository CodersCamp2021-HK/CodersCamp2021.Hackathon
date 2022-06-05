import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { readFactchecks, StorageFactchecks, useNewFactcheckListener } from '../../../../shared';
import { Notification } from '../../../components/Notification';

const HistoryView = () => {
  const [history, setHistory] = useState<StorageFactchecks>([]);

  const refetchFactchecks = () => {
    readFactchecks().then((factchecks) => setHistory(factchecks.filter(({ inHistory }) => inHistory)));
  };

  useEffect(() => {
    refetchFactchecks();
  }, []);
  useNewFactcheckListener(() => {
    refetchFactchecks();
  });

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
