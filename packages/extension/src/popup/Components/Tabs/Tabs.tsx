import { css, jsx } from '@emotion/react';

import form from '../../images/form.svg';
import history from '../../images/history.svg';
import report from '../../images/report.svg';
import { Tab } from './Tab';

const tabs = [
  {
    name: 'Raport',
    iconPath: report,
    iconAlt: 'Raport',
  },
  {
    name: 'Zgłoś',
    iconPath: form,
    iconAlt: 'Zgłoś',
  },
  {
    name: 'Historia',
    iconPath: history,
    iconAlt: 'Historia',
  },
];

const Tabs = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      {tabs.map(({ name, iconPath, iconAlt }) => {
        return <Tab key={name} name={name} iconPath={iconPath} iconAlt={iconAlt}></Tab>;
      })}
    </div>
  );
};

export { Tabs };
