import { css } from '@emotion/react';

import { TopBar } from './components';
import { ReportView } from './tabs';

const App = () => {
  return (
    <div className='App'>
      <TopBar />
      <div
        css={css`
          background-color: #f7f7f7;
        `}
      >
        {/* TODO: Tabs go here */}
        <ReportView />
      </div>
    </div>
  );
};

export { App };
