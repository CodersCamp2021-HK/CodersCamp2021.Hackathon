import { css } from '@emotion/react';

// eslint-disable-next-line import/namespace
import { Tabs, TopBar } from './components';
import { colors } from './shared/theme';
import { ReportView } from './tabs';

const App = () => {
  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        <Tabs />
        <ReportView />
      </main>
    </>
  );
};

export { App };
