import { css } from '@emotion/react';

import { TabId, TABS_DATA } from '../../shared';
import { Tab } from './Tab';

interface TabsProps {
  selectedTab: TabId;
  setSelectedTab: (tabId: TabId) => void;
}

const Tabs = ({ selectedTab, setSelectedTab }: TabsProps) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {TABS_DATA.map(({ id, name, iconComponent }) => {
        return (
          <Tab
            key={id}
            name={name}
            iconComponent={iconComponent}
            state={selectedTab === id ? 'active' : undefined}
            onClick={() => setSelectedTab(id)}
          />
        );
      })}
    </div>
  );
};

export { Tabs };
