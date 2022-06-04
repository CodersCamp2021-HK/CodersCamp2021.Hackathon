import { useState } from 'react';

import { TabId } from '../../shared';
import { Tabs } from '../Tabs';
import { FormView, HistoryView, ReportView } from '../views';

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
      return <HistoryView />;
  }
};

const ALLOWED_PROTOCOLS = ['http:', 'https:'];

interface ViewSelectorProps {
  url: string;
  hasFactcheck: boolean;
}

const ViewSelector = ({ url, hasFactcheck }: ViewSelectorProps) => {
  const isHttp = ALLOWED_PROTOCOLS.includes(new URL(url).protocol);

  // TODO: refactor
  const disabledTabs = isHttp ? (hasFactcheck ? [] : (['report'] as TabId[])) : (['report', 'form'] as TabId[]);
  const defaultTab = isHttp ? (hasFactcheck ? 'report' : 'form') : 'history';
  const [selectedTab, setSelectedTab] = useState<TabId>(defaultTab);

  return (
    <>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} disabledTabs={disabledTabs} />
      <View selectedTab={selectedTab} />
    </>
  );
};

export { ViewSelector };
