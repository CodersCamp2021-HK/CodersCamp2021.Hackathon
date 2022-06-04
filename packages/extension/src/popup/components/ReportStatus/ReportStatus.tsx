import { css } from '@emotion/react';

import { Status } from '../../shared';
import { Badge } from '../Badge';

interface ReportStatusProps {
  status: Status;
}

export const ReportStatus = ({ status }: ReportStatusProps) => {
  return (
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
        `}
      >
        {status.text}
      </span>
    </div>
  );
};
