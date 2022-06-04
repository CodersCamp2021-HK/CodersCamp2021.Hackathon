import { css } from '@emotion/react';

import { Notification } from '../../components/Notification';
import websiteLogo from '../../images/fakt_logo.png';
import { Status } from '../../shared';

const historyFeed = [
  {
    reportedWebsiteLogo: websiteLogo,
    reportedWebsite: 'Fakt.pl',
    title: 'Wiceminister wściekł się w programie na żywo. Wyrzucić wszystkich...',
    status: Status.Fake,
    sourceLink: 'fakt.pl/24353y',
    reportLink: 'demagog.pl/24353',
    partnerDomain: 'demagog.pl',
  },
  {
    reportedWebsiteLogo: websiteLogo,
    reportedWebsite: 'Fakt.pl',
    title: 'Wiceminister wściekł się w programie na żywo. Wyrzucić wszystkich...',
    status: Status.Warning,
    sourceLink: 'fakt.pl/24353y',
    reportLink: 'demagog.pl/24353',
    partnerDomain: 'demagog.pl',
  },
  {
    reportedWebsiteLogo: websiteLogo,
    reportedWebsite: 'Fakt.pl',
    title: 'Wiceminister wściekł się w programie na żywo. Wyrzucić wszystkich...',
    status: Status.Truth,
    sourceLink: 'fakt.pl/24353y',
    reportLink: 'demagog.pl/24353',
    partnerDomain: 'demagog.pl',
  },
  {
    reportedWebsiteLogo: websiteLogo,
    reportedWebsite: 'Fakt.pl',
    title: 'Wiceminister wściekł się w programie na żywo. Wyrzucić wszystkich...',
    status: Status.Warning,
    sourceLink: 'fakt.pl/24353y',
    reportLink: 'demagog.pl/24353',
    partnerDomain: 'demagog.pl',
  },
  {
    reportedWebsiteLogo: websiteLogo,
    reportedWebsite: 'Fakt.pl',
    title: 'Wiceminister wściekł się w programie na żywo. Wyrzucić wszystkich...',
    status: Status.Warning,
    sourceLink: 'fakt.pl/24353y',
    reportLink: 'demagog.pl/24353',
    partnerDomain: 'demagog.pl',
  },
];
const HistoryView = () => {
  const mappedHistory = historyFeed.map(({ ...feed }) => {
    return <Notification key={feed.reportLink} {...feed}></Notification>;
  });

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 20px 15px;
      `}
    >
      {mappedHistory}
    </div>
  );
};

export { HistoryView };
