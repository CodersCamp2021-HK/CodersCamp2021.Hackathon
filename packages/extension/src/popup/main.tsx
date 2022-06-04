import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
