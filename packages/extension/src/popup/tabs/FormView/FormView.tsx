import { css } from '@emotion/react';
import { useId, useState } from 'react';

import { Button } from '../../components';
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
          font-size: 0.75rem;
        `}
      >
        <input id={checkboxId} checked={isChecked} onClick={() => setIsChecked((prev) => !prev)} type='checkbox' />{' '}
        Zgadzam się
      </label>
      <Button
        onClick={() => {
          alert('');
        }}
        disabled={disabled}
      >
        WYŚLIJ
      </Button>
    </div>
  );
};

export { FormView };
