import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      css={css`
        background-color: #ffffff;
        border: 1px solid #03009d;
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
