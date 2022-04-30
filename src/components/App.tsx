import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../app/store';

import PageLayout from './layout/PageLayout';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <PageLayout />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
