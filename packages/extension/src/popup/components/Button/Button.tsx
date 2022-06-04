import { css } from '@emotion/react';

import { colors, transition } from '../../shared';

type ButtonProps = { children: string; disabled?: boolean } & ({ href: string } | { onClick: () => void });

const Button = (props: ButtonProps) => {
  const Element = 'href' in props ? 'a' : 'button';

  return (
    <Element
      css={css`
        cursor: pointer;
        display: block;
        padding: 0.75rem;
        border: none;
        border-radius: 50px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: ${colors.common.white};
        background-color: ${colors.primary.main};
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
        transition: ${transition.default};
        &[disabled] {
          background-color: ${colors.action.disabled};
          box-shadow: none;
        }
      `}
      target='_blank'
      {...props}
    >
      {props.children}
    </Element>
  );
};

export { Button };
