import { css } from '@emotion/react';

import { Status } from '../../../shared';
import { Button, Card, ReportStatus } from '../..';

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

const ReportView = () => {
  const report = {
    status: Status.Fake,
    verifierLink: 'https://demagog.org.pl',
    sourceLink: 'https://onet.pl/wiceminister-wsciekl-sie-w-programie-na-zywo',
    factCheckLink: 'https://demagog.org.pl/fake_news/rosja-zniszczyla-dolara-i-powiazala-rubla-ze-zlotem-fake-news/',
    description:
      'Informacje na ten temat są nieprawdziwe. W Rosji nie funkcjonuje system złotej waluty, a wzrosty wartości rubla są związane m.in. z manipulacjami dokonywanymi na rynku, co nie odzwierciedla realnej wartości rosyjskiej waluty.',
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
      `}
    >
      <ReportStatus status={report.status} />
      <Card>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          `}
        >
          <p>
            Weryfikator: <br />
            <ReportLink>{report.verifierLink}</ReportLink>
          </p>
          <p>
            Link do źródła: <br />
            <ReportLink>{report.sourceLink}</ReportLink>
          </p>
        </div>
      </Card>
      <Card>
        <p
          css={css`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            line-clamp: 5;
            -webkit-box-orient: vertical;
            margin-bottom: 1rem;
          `}
        >
          {report.description}
        </p>
        <Button href={report.factCheckLink}>Zobacz pełną alternatywę</Button>
      </Card>
    </div>
  );
};

export { ReportView };
