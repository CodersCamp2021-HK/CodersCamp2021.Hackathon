import { css } from '@emotion/react';
import { useId, useState } from 'react';

import { Button } from '../../components';
import checkboxPath from '../../images/checkbox.svg';
import { colors } from '../../shared';

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
  const nameId = useId();
  const [name, setName] = useState('');

  const emailId = useId();
  const [email, setEmail] = useState('');

  const descriptionId = useId();
  const [description, setDescription] = useState('');

  const checkboxId = useId();
  const [isChecked, setIsChecked] = useState(false);

  const disabled = !isChecked || !name || !email;

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
        <label htmlFor={descriptionId}>Uzasadnienie</label>
        <textarea
          id={descriptionId}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          rows={5}
        />
      </p>
      <p
        css={css`
          font-size: 0.75rem;
          color: ${colors.primary.dark};
        `}
      >
        Pola zaznacone * są obowiązkowe
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
          onClick={() => setIsChecked((prev) => !prev)}
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
          alert(JSON.stringify({ name, email, description, url: 'TODO' }));
        }}
        disabled={disabled}
      >
        WYŚLIJ
      </Button>
    </div>
  );
};

export { FormView };
