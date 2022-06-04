import { css } from '@emotion/react';

import { colors, Status } from '../../shared';

interface BadgeProps {
  status: Status;
  size: number;
}

const Badge = ({ status, size }: BadgeProps) => {
  return (
    <div
      css={css`
        background-color: ${status.color};
        color: ${colors.common.white};
        width: ${size}px;
        height: ${size}px;
        text-align: center;
        line-height: ${size}px;
        border-radius: 50%;
      `}
    ></div>
  );
};

export { Badge };
