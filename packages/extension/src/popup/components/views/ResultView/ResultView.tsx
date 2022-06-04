import { css } from '@emotion/react';

import letterError from '../../../images/letterError.svg';
import letterSuccess from '../../../images/letterSuccess.svg';

interface ResultViewProps {
  result: boolean;
}

const ResultView = ({ result }: ResultViewProps) => {
  const { src, alt, body } = result
    ? {
        src: letterSuccess,
        alt: 'Sukces',
        body: (
          <>
            <p>Twoja wiadomość została wysłana.</p>
            <p>Dziękujemy!</p>
          </>
        ),
      }
    : {
        src: letterError,
        alt: 'Error',
        body: (
          <>
            <p>Nastąpił błąd przy wysyłaniu wiadomości.</p>
            <p>Spróbuj jeszcze raz!</p>
          </>
        ),
      };

  return (
    <div
      css={css`
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
      `}
    >
      <img alt={alt} src={src} width='80' />
      <div
        css={css`
          font-size: 0.75rem;
          text-align: center;
        `}
      >
        {body}
      </div>
    </div>
  );
};

export { ResultView };
