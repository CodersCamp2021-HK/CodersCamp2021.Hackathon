import { css } from '@emotion/react';

import { TopBar } from './components';
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
        {/* TODO: Tabs go here */}
        <ReportView />
      </main>
    </>
  );
};

export { App };
