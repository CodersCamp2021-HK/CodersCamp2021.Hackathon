import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { Status } from '../../shared';
import { colors, transition } from '../../shared/theme';
import { Badge } from '../Badge';

export type TabProps = {
  name: string;
  iconComponent: ReactNode;
  state?: string;
  status?: Status | undefined;
  onClick: () => void;
  disabled?: boolean;
};

const Tab = ({ name, iconComponent, state, status, onClick, disabled }: TabProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={state}
      css={css`
        cursor: pointer;
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid ${state === 'active' ? colors.primary.main : colors.common.white};
        transition: ${transition.default};
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 12px 0;
        &:hover,
        &.active {
          p {
            color: ${colors.primary.dark};
          }
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
      <div
        className='icon'
        css={css`
          position: relative;
        `}
      >
        {iconComponent}
        <div
          css={css`
            position: absolute;
            bottom: 100%;
            left: 100%;
            transform: translate(-50%, 50%);
          `}
        >
          {status ? <Badge size={18} status={status}></Badge> : ''}
        </div>
      </div>
      <p
        css={css`
          color: ${colors.text.disabled};
          font-weight: 900;
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
