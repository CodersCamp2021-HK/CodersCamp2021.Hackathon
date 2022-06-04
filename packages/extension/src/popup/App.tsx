import { css } from '@emotion/react';

// eslint-disable-next-line import/namespace
import { Tabs, TopBar } from './components';
import { colors } from './shared/theme';
import { HistoryView, ReportView } from './tabs';

const App = () => {
  return (
    <>
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        <TopBar />
        <Tabs />
        {/* <ReportView /> */}
        <HistoryView />
      </main>
    </>
  );
};

export { App };
