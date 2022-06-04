import { css } from '@emotion/react';

import { colors } from '../../shared';

type ButtonProps =
  | {
      href: string;
    }
  | { onClick: () => void };

const Button = (props: ButtonProps) => {
  const Element = 'href' in props ? 'a' : 'button';

  return (
    <Element
      css={css`
        display: block;
        padding: 0.75rem;
        border-radius: 50px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: ${colors.common.white};
        background-color: ${colors.primary.main};
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
      `}
      target='_blank'
      {...props}
    >
      Zobacz pełną analizę
    </Element>
  );
};

export { Button };
