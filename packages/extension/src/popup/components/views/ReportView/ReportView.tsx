import { css } from '@emotion/react';

import { Status, useCurrentUrl } from '../../../../shared';
import { useArticleFactcheck } from '../../../shared';
import { Button, Card, ReportStatus } from '../..';
import { isWarning } from './IsWarning';
import { ReportLink } from './ReportLink';
import { ReportWarning } from './ReportWarning';

const ReportView = () => {
  const url = useCurrentUrl();
  const report = useArticleFactcheck(url);

  if (!report) return null;

  if (isWarning(report)) {
    return <ReportWarning {...report} />;
  }

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
      <ReportStatus status={Status.deserialize(report.status)} />
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
            <a target='_blank' href={report.verificationSrc} rel='noreferrer'>
              {report.verifiedBy}
            </a>
          </p>
          <p>
            Link do źródła: <br />
            <ReportLink>{report.url}</ReportLink>
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
        <Button href={report.verificationSrc}>Zobacz pełną alternatywę</Button>
      </Card>
    </div>
  );
};

export { ReportView };
