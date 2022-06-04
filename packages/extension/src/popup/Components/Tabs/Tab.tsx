import { css } from '@emotion/react';

export type TabProps = {
  name: string;
  iconPath: string;
  iconAlt: string;
};

const Tab = ({ name, iconPath, iconAlt }: TabProps) => {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
      `}
    >
      <div className='icon'>
        <img src={iconPath} alt={iconAlt}></img>
      </div>
      <p>{name}</p>
    </div>
  );
};

export { Tab };
