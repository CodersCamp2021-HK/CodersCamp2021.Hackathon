import { css } from '@emotion/react';

import { Status } from '../../../../shared';
import { Badge, Card } from '../..';
import { WarningDto } from './IsWarning';
import { ReportLink } from './ReportLink';

const ReportWarning = (props: WarningDto) => {
  const status = Status.deserialize(props.status);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        `}
      >
        <Badge status={status} size={32} />
        <span
          css={css`
            color: ${status.color};
            font-weight: bold;
            text-transform: uppercase;
          `}
        >
          {status.text}
        </span>
        <span
          css={css`
            color: ${status.color};
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.75rem;
          `}
        >
          Zgłoszono {props.count} razy
        </span>
      </div>
      <Card>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          `}
        >
          <p>
            Link do źródła: <br />
            <ReportLink>{props.url}</ReportLink>
          </p>
        </div>
      </Card>
    </div>
  );
};

export { ReportWarning };
