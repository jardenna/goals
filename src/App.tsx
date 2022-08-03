import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './app/store';
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

// https://stackoverflow.com/questions/70698899/why-does-react-router-v6-seem-unable-to-remove-query-string-param-from-url
// https://stackoverflow.com/questions/27281405/group-by-object-ids-in-javascript
// https://stackoverflow.com/questions/58433967/group-array-of-objects-by-id
// https://stackoverflow.com/questions/39634912/group-javascript-array-of-objects-by-id
// https://stackblitz.com/edit/navigate-to-url-query-strings-search-params-react-router?file=src%2FApp.js
