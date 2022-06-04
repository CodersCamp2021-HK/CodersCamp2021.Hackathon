import { css } from '@emotion/react';

import logo from '../../logo.svg';

const TopBar = () => {
  return (
    <header>
      <h1>
        <img
          css={css`
            padding: 0.25rem 1.5rem;
            display: block;
          `}
          src={logo}
          alt='Faktyczka'
          height={40}
        />
      </h1>
    </header>
  );
};

export { TopBar };
