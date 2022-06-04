import { css } from '@emotion/react';

import { FormIcon } from '../../images/form';
import { HistoryIcon } from '../../images/history';
import { ReportIcon } from '../../images/report';
import { Status } from '../../shared/statuses';
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
      {tabs.map(({ name, iconComponent }) => {
        return <Tab key={name} name={name} iconComponent={iconComponent}></Tab>;
      })}
    </div>
  );
};

export { Tabs };
