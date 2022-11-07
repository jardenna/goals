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

// cy.get('[href*="maps"]').each(($el) => {
//   let id_text = $el.text().trim()

//   //Check that the element is visible and click on it
//   cy.wrap($el).should('be.visible').click()

//   //Check that the url contains the text value of the element that was clicked on
//   cy.url().should('contain', id_text)

//   //Wait half a sec
//   cy.wait(500)
// })
