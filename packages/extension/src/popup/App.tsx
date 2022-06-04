import { css } from '@emotion/react';
import { useState } from 'react';

import { Tabs, TopBar } from './components';
import { useFormFeedback } from './contexts';
import { TabId } from './shared/tabs';
import { colors } from './shared/theme';
import { FormView, ReportView, ResultView } from './tabs';

interface ViewProps {
  selectedTab: TabId;
}

const View = ({ selectedTab }: ViewProps) => {
  switch (selectedTab) {
    case 'report':
      return <ReportView />;
    case 'form':
      return <FormView />;
    case 'history':
      return <div />;
  }
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>('report');
  const { wasSent } = useFormFeedback();
  console.log(wasSent);

  return (
    <>
      <TopBar />
      <main
        css={css`
          background-color: ${colors.common.grey};
        `}
      >
        {wasSent ? (
          <ResultView />
        ) : (
          <>
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <View selectedTab={selectedTab} />
          </>
        )}
      </main>
    </>
  );
};

export { App };
