import { css } from '@emotion/react';

import { ResultView, TopBar, ViewSelector } from './components';
import { useFormFeedback } from './contexts';
import { colors, useCurrentUrl } from './shared';

const App = () => {
  const { result } = useFormFeedback();
  const url = useCurrentUrl();

  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        {result !== null ? <ResultView result={result} /> : url && <ViewSelector url={url} />}
      </main>
    </>
  );
};

export { App };
