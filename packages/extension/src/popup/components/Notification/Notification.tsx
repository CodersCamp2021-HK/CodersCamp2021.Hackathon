import { css } from '@emotion/react';
import { FactcheckDto } from '@faktyczka/sdk';

import { Status } from '../../shared';
import { colors } from '../../shared/theme';
import { Badge } from '../Badge';

const linkStyles = {
  textDecoration: 'none',
  color: colors.text.primary,
};

const oneRowStyles = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
};

interface NotificationProps {
  factcheck: FactcheckDto;
}

const Notification = ({ factcheck }: NotificationProps) => {
  const faviconUrl = `${new URL(factcheck.url).origin}/favicon.ico`;
  const reportedWebsite = new URL(factcheck.url).hostname;

  return (
    <div
      css={css`
        padding: 20px 15px;
        background-color: ${colors.common.white};
        border: 1px solid ${colors.primary.dark};
        border-radius: 16px;
        box-shadow: 0px 4px 4px rgba(54, 0, 141, 0.15);
        position: relative;
        font-size: 0.75rem;
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          align-items: center;
        `}
      >
        <img height='16' src={faviconUrl} alt=''></img>
        <p
          css={css`
            color: ${colors.text.disabled};
            font-weight: 100;
          `}
        >
          {reportedWebsite}
        </p>
      </div>
      <p
        css={css`
          font-weight: bold;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        `}
      >
        <a
          href={factcheck.url}
          target='_blank'
          rel='noreferrer'
          css={css`
            color: inherit;
            text-decoration: none;
          `}
        >
          {factcheck.title}
        </a>
      </p>
      <div
        css={css`
          margin-bottom: 10px;
        `}
      ></div>
      <div
        css={css`
          ${oneRowStyles}
        `}
      >
        {/* TODO */}
        <Badge size={20} status={Status.Truth}></Badge>
        <a
          href={factcheck.verificationSrc}
          target='_blank'
          css={css`
            ${linkStyles};
            color: ${colors.primary.light};
          `}
          rel='noreferrer'
        >
          {factcheck.verifiedBy}
        </a>
      </div>
    </div>
  );
};

export { Notification };
