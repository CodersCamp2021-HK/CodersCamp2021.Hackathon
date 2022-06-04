import { css } from '@emotion/react';

import { TabId, TABS_DATA } from '../../shared/tabs';
import { colors } from '../../shared/theme';
import { Tab } from './Tab';

interface TabsProps {
  selected: TabId;
}

const Tabs = ({ selected }: TabsProps) => {
  return (
    <div
      css={css`
        display: flex;
        border-bottom: 2px solid ${colors.common.white};
      `}
    >
      {TABS_DATA.map(({ id, name, iconComponent }) => {
        return (
          <Tab key={name} name={name} iconComponent={iconComponent} state={selected === id ? 'active' : undefined} />
        );
      })}
    </div>
  );
};

export { Tabs };
