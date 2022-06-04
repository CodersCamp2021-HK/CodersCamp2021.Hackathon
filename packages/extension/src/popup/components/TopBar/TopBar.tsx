import { css } from '@emotion/react';

import logo from '../../logo.svg';

const TopBar = () => {
  return (
    <header>
      <h1>
        <img
          css={css`
            padding: 10px 25px;
            display: block;
          `}
          src={logo}
          alt='Faktyczka'
          height={20}
        />
      </h1>
    </header>
  );
};

export { TopBar };
