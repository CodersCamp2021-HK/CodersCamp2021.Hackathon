import { css } from '@emotion/react';
import { useEffect, useId, useState } from 'react';

import { useCurrentUrl } from '../../../../shared';
import { useFormFeedback } from '../../../contexts';
import checkboxPath from '../../../images/checkbox.svg';
import { colors } from '../../../shared';
import { Button } from '../..';

const control = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  & label {
    color: ${colors.primary.dark};
    font-size: 0.875rem;
    font-weight: bold;
    padding-left: 0.5rem;
  }

  & input,
  textarea {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba(3, 0, 157, 0.15);
    border: 1px solid ${colors.primary.dark};
    background-color: ${colors.common.white};
  }
`;

const FormView = () => {
  const { send } = useFormFeedback();
  const url = useCurrentUrl();

  const nameId = useId();
  const [name, setName] = useState('');

  const emailId = useId();
  const [email, setEmail] = useState('');

  const reasonId = useId();
  const [reason, setReason] = useState('');
  const description = reason.length === 0 ? undefined : reason;

  const checkboxId = useId();
  const [isChecked, setIsChecked] = useState(false);

  const disabled = !isChecked || !name || !email;

  useEffect(() => {
    chrome.storage.sync.get(['name', 'email'], ({ name, email }) => {
      if (name) {
        setName(name);
      }
      if (email) {
        setEmail(email);
      }
    });
  }, []);

  return (
    <div
      css={css`
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `}
    >
      <p css={control}>
        <label htmlFor={nameId}>Imię i nazwisko *</label>
        <input id={nameId} value={name} onChange={({ target }) => setName(target.value)} />
      </p>
      <p css={control}>
        <label htmlFor={emailId}>Email *</label>
        <input id={emailId} value={email} onChange={({ target }) => setEmail(target.value)} />
      </p>
      <p css={control}>
        <label htmlFor={reasonId}>Uzasadnienie</label>
        <textarea
          id={reasonId}
          value={reason}
          onChange={({ target }) => setReason(target.value)}
          rows={5}
          css={css`
            resize: none;
          `}
        />
      </p>
      <p
        css={css`
          font-size: 0.75rem;
          color: ${colors.primary.dark};
        `}
      >
        Pola zaznaczone * są obowiązkowe
      </p>
      <label
        htmlFor={checkboxId}
        css={css`
          padding-left: 2.5rem;
          font-size: 0.75rem;
          position: relative;
          line-height: 2rem;

          &:before,
          &:after {
            content: '';
            position: absolute;
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
            left: 0;
            top: 0;
            box-sizing: border-box;
          }

          &:before {
            border: 1px solid ${colors.primary.dark};
            background-color: ${colors.common.white};
          }

          &:after {
            background-image: ${isChecked ? `url(${checkboxPath})` : 'none'};
            background-size: 1.5rem 1.5rem;
            background-repeat: no-repeat;
            background-position: center center;
          }
        `}
      >
        <input
          id={checkboxId}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          type='checkbox'
          css={css`
            opacity: 0;
            width: 0;
            height: 0;
          `}
        />{' '}
        Zgadzam się
      </label>
      <Button
        onClick={() => {
          send({ name, email, description, url });
        }}
        disabled={disabled}
      >
        WYŚLIJ
      </Button>
    </div>
  );
};

export { FormView };
