import { css } from '@emotion/react';

import { ResultView, TopBar, ViewSelector } from './components';
import { useFormFeedback } from './contexts';
import { colors } from './shared/theme';

const App = () => {
  const { wasSent } = useFormFeedback();

  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        {wasSent ? <ResultView /> : <ViewSelector />}
      </main>
    </>
  );
};

export { App };
