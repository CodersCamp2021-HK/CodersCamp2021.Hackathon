import { css } from '@emotion/react';
import { useState } from 'react';

import { Tabs, TopBar } from './components';
import { TabId } from './shared/tabs';
import { colors } from './shared/theme';
import { ReportView } from './tabs';

const App = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>('report');

  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        <Tabs selected={selectedTab} />
        <ReportView />
      </main>
    </>
  );
};

export { App };
