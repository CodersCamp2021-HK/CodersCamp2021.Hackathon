import { css } from '@emotion/react';

import { Card } from '../../components';

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
      `}
    >
      <div>FAŁSZ</div>
      <Card>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 8px;
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
