import { css } from '@emotion/react';

import { ResultView, TopBar, ViewSelector } from './components';
import { useFormFeedback } from './contexts';
import { colors, useCurrentUrl } from './shared';
import { useArticleFactcheck } from './shared/useArticleFactcheck';

const App = () => {
  const { result } = useFormFeedback();
  const url = useCurrentUrl();
  const factcheck = useArticleFactcheck(url);

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
