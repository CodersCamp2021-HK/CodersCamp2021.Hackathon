import { css } from '@emotion/react';

import { Card, ReportStatus } from '../../components';
import { Status } from '../../shared';

const linkOverflow = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReportView = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 12px;
      `}
    >
      <ReportStatus status={Status.Fake} />
      <Card>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 8px;
            font-size: 0.75rem;
          `}
        >
          <p>
            Weryfikator: <br />
            <a css={linkOverflow} href='https://demagog.org.pl'>
              demagog.org.pl
            </a>
          </p>
          <p>
            Link do źródła: <br />
            <a css={linkOverflow} href='https://onet.pl/wiceminister-wsciekl-sie-w-programie-na-zywo'>
              onet.pl/wiceminister-wsciekl-sie-w-programie-na-zywo
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export { ReportView };