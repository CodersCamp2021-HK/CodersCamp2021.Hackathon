import { css } from '@emotion/react';

import { colors } from '../../shared/theme';
import { Badge } from '../Badge';

interface ReportStatusProps {
  icon: string;
  text: string;
}

export const ReportStatus = ({ icon, text }: ReportStatusProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      `}
    >
      <Badge size={32} color={colors.status.fake}>
        {icon}
      </Badge>
      <span
        css={css`
          color: ${colors.status.fake};
          font-weight: bold;
        `}
      >
        {text}
      </span>
    </div>
  );
};
