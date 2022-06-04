import { css } from '@emotion/react';

import { ResultView, TopBar, ViewSelector } from './components';
import { useFormFeedback } from './contexts';
import { colors } from './shared/theme';

const App = () => {
  const { result } = useFormFeedback();

  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        {result !== null ? <ResultView result={result} /> : <ViewSelector />}
      </main>
    </>
  );
};

export { App };
