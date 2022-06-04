import { css } from '@emotion/react';

import close from '../../images/close.svg';
import { Status } from '../../shared';
import { colors } from '../../shared/theme';
import { Badge } from '../Badge';

const linkStyles = {
  'text-decoration': 'none',
  color: colors.text.primary,
};

const oneRowStyles = {
  display: 'flex',
  gap: '10px',
};

type NotificationProps = {
  reportedWebsiteLogo: string;
  reportedWebsite: string;
  title: string;
  status: Status;
  sourceLink: string;
  reportLink: string;
  verifierLink: string;
};
const Notification = ({
  reportedWebsiteLogo,
  reportedWebsite,
  title,
  status,
  sourceLink,
  reportLink,
  verifierLink,
}: NotificationProps) => {
  return (
    <div
      css={css`
        padding: 20px 15px;
        background-color: ${colors.common.white};
        border: 1px solid ${colors.primary.dark};
        border-radius: 16px;
        box-shadow: 0px 4px 4px rgba(54, 0, 141, 0.15);
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 20px;
          right: 20px;
        `}
      >
        <img src={close} alt=''></img>
      </div>
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        `}
      >
        <img src={reportedWebsiteLogo} alt={reportedWebsite}></img>
        <p
          css={css`
            color: ${colors.text.disabled};
            font-weight: '100';
          `}
        >
          {reportedWebsite}
        </p>
      </div>
      <p
        css={css`
          font-weight: bold;
          margin-bottom: 10px;
        `}
      >
        {title}
      </p>
      <div
        css={css`
          margin-bottom: 10px;
        `}
      >
        <p
          css={css`
            ${oneRowStyles}
          `}
        >
          Źródło:
          <a
            href={sourceLink}
            css={css`
              ${linkStyles}
            `}
          >
            {sourceLink}
          </a>
        </p>
        <p
          css={css`
            ${oneRowStyles}
          `}
        >
          Analiza
          <a
            href={reportLink}
            css={css`
              ${linkStyles}
            `}
          >
            {reportLink}
          </a>
        </p>
      </div>
      <div
        css={css`
          ${oneRowStyles}
        `}
      >
        <Badge size={20} status={status}></Badge>
        <a
          href={verifierLink}
          css={css`
            ${linkStyles};
            color: ${colors.primary.light};
          `}
        >
          {verifierLink}
        </a>
      </div>
    </div>
  );
};

export { Notification };
