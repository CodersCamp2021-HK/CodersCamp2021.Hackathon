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
        padding: 16px;
        border-radius: 16px;
        width: 100%;
        font-size: 0.75rem;
        box-shadow: 0px 4px 4px rgba(3, 0, 157, 0.15);
      `}
    >
      {children}
    </div>
  );
};

export { Card };
