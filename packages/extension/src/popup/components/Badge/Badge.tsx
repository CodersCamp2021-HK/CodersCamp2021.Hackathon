import { css } from '@emotion/react';

import { Status } from '../../../shared';
import { colors } from '../../shared';

interface BadgeProps {
  status: Status | undefined;
  size: number;
}

const Badge = ({ status, size }: BadgeProps) => {
  return (
    <div
      css={css`
        background-color: ${status ? status.color : ''};
        color: ${colors.common.white};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        display: grid;
        place-items: center;
      `}
    >
      <img width={size * 0.66} height={size * 0.66} alt='' src={status ? status.iconPath : ''} />
    </div>
  );
};

export { Badge };
