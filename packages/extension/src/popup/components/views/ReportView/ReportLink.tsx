import { css } from '@emotion/react';

interface ReportLinkProps {
  children: string;
}

const ReportLink = ({ children }: ReportLinkProps) => {
  const url = new URL(children);
  return (
    <a
      css={css`
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
      target='_blank'
      href={children}
      rel='noreferrer'
    >
      {url.hostname}
      {url.pathname !== '/' && url.pathname}
    </a>
  );
};

export { ReportLink };
