import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { colors, transition } from '../../shared/theme';

export type TabProps = {
  name: string;
  iconComponent: ReactNode;
};

const Tab = ({ name, iconComponent }: TabProps) => {
  return (
    <button
      css={css`
        background-color: transparent;
        border: 0;
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 12px 0;
        &:hover {
          color: ${colors.primary.dark};
          path {
            stroke: ${colors.primary.dark};
            stroke-opacity: 1;
          }
        }
        path {
          transition: ${transition.default};
        }
      `}
    >
      <div className='icon'>{iconComponent}</div>
      <p
        css={css`
          font-weight: bold;
          padding-top: 6px;
          transition: ${transition.default};
        `}
      >
        {name}
      </p>
    </button>
  );
};

export { Tab };
