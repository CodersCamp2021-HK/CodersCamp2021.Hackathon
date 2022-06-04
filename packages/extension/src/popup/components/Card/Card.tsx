import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { colors } from '../../shared/theme';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      css={css`
        background-color: ${colors.common.white};
        border: 1px solid ${colors.primary.dark};
        margin: 12px 16px;
        padding: 6px 16px;
        border-radius: 16px;
      `}
    >
      {children}
    </div>
  );
};

export { Card };
