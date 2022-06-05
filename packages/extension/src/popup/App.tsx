import { css } from '@emotion/react';

import { useCurrentUrl } from '../shared';
import { ResultView, TopBar, ViewSelector } from './components';
import { useFormFeedback } from './contexts';
import { colors } from './shared';
import { useArticleFactcheck } from './shared/useArticleFactcheck';
import { useCountNumberOfTickets } from './shared/useCountNumberOfTickets';

const App = () => {
  const { result } = useFormFeedback();
  const url = useCurrentUrl();
  const factcheck = useArticleFactcheck(url);
  const count = useCountNumberOfTickets(url);

  if (count !== null && count !== 0) {
    chrome.storage.local
      .set({ [`fc#${url}`]: { url: url, status: 'Warning', count: count } })
      .then(() => chrome.runtime.sendMessage('noop'));
  }

  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        {result !== null ? (
          <ResultView result={result} />
        ) : (
          // TODO: refactor
          url && factcheck !== undefined && <ViewSelector url={url} hasFactcheck={factcheck !== null} />
        )}
      </main>
    </>
  );
};

export { App };
