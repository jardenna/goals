import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './scss/style.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
