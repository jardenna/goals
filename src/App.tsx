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

// import { addMonths, subMonths } from "date-fns";

// const date = new Date();
// function getFirstDayOfMonth(year, month) {
//   return new Date(year, month, 1);
// }
// const firstDayCurrentMonth = getFirstDayOfMonth(
//   date.getFullYear(),
//   date.getMonth(),
// );
// const a = addMonths(firstDayCurrentMonth, 2);
// const b = subMonths(firstDayCurrentMonth, 1);
// document.getElementById("app").innerHTML = `

// <div>
// Subtract: ${b}
// </div>

// <div>
// Add: ${a}
// </div>
// `;
