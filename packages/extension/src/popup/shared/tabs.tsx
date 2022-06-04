import { FormIcon } from '../images/form';
import { HistoryIcon } from '../images/history';
import { ReportIcon } from '../images/report';

const TABS_DATA = [
  {
    id: 'report',
    name: 'Raport',
    iconComponent: <ReportIcon />,
  },
  {
    id: 'form',
    name: 'Zgłoś',
    iconComponent: <FormIcon />,
  },
  {
    id: 'history',
    name: 'Historia',
    iconComponent: <HistoryIcon />,
  },
] as const;

type TabId = typeof TABS_DATA[number]['id'];

export { TABS_DATA };
export type { TabId };
