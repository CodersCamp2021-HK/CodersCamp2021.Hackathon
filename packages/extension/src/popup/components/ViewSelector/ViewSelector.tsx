import { useState } from 'react';

import { TabId } from '../../shared';
import { Tabs } from '../Tabs';
import { FormView, ReportView } from '../views';

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

const ALLOWED_PROTOCOLS = ['http:', 'https:'];

interface ViewSelectorProps {
  url: string;
}

const ViewSelector = ({ url }: ViewSelectorProps) => {
  const { protocol } = new URL(url);
  console.log(protocol);
  const disabledTabs = ALLOWED_PROTOCOLS.includes(protocol) ? [] : (['report', 'form'] as TabId[]);
  const defaultTab = ALLOWED_PROTOCOLS.includes(protocol) ? 'report' : 'history';
  const [selectedTab, setSelectedTab] = useState<TabId>(defaultTab);

  return (
    <>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} disabledTabs={disabledTabs} />
      <View selectedTab={selectedTab} />
    </>
  );
};

export { ViewSelector };
