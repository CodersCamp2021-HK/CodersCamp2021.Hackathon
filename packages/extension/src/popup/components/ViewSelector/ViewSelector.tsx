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

const ViewSelector = () => {
  const [selectedTab, setSelectedTab] = useState<TabId>('report');

  return (
    <>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <View selectedTab={selectedTab} />
    </>
  );
};

export { ViewSelector };
