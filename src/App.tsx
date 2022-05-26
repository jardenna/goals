import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageLayout from './layout/PageLayout';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <PageLayout />
      </Router>
    </React.StrictMode>
  );
}

export default App;
