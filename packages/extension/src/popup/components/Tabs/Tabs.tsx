import { css } from '@emotion/react';

import { FormIcon } from '../../images/form';
import { HistoryIcon } from '../../images/history';
import { ReportIcon } from '../../images/report';
import { colors } from '../../shared/theme';
import { Tab } from './Tab';

const tabs = [
  {
    name: 'Raport',
    iconComponent: <ReportIcon></ReportIcon>,
  },
  {
    name: 'Zgłoś',
    iconComponent: <FormIcon></FormIcon>,
  },
  {
    name: 'Historia',
    iconComponent: <HistoryIcon></HistoryIcon>,
  },
];

const Tabs = () => {
  return (
    <div
      css={css`
        display: flex;
        border-bottom: 2px solid ${colors.common.white};
      `}
    >
      {tabs.map(({ name, iconComponent }) => {
        return <Tab key={name} name={name} iconComponent={iconComponent}></Tab>;
      })}
    </div>
  );
};

export { Tabs };
