import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { FormFeedbackContextProvider } from './contexts';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <FormFeedbackContextProvider>
      <App />
    </FormFeedbackContextProvider>
  </React.StrictMode>,
);
