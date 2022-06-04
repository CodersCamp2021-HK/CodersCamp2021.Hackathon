import { css } from '@emotion/react';

import { colors, TabId, TABS_DATA } from '../../shared';
import { Tab } from './Tab';

interface TabsProps {
  selectedTab: TabId;
  setSelectedTab: (tabId: TabId) => void;
  disabledTabs: TabId[];
}

const Tabs = ({ selectedTab, setSelectedTab, disabledTabs }: TabsProps) => {
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background-color: ${colors.common.white};
        }
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
            disabled={disabledTabs.includes(id)}
          />
        );
      })}
    </div>
  );
};

export { Tabs };
