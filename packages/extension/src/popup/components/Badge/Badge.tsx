import { css } from '@emotion/react';

import { colors } from '../../shared/theme';

interface BadgeProps {
  children: string;
  size: number;
  color: string;
}

const Badge = ({ children, size, color }: BadgeProps) => {
  return (
    <div
      css={css`
        background-color: ${color};
        color: ${colors.common.white};
        width: ${size}px;
        height: ${size}px;
        text-align: center;
        line-height: ${size}px;
        border-radius: 50%;
      `}
    >
      {children}
    </div>
  );
};

export { Badge };
