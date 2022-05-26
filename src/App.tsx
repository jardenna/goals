import { Provider } from 'react-redux';

import { store } from './app/store';
import PageLayout from './layout/PageLayout';

function App() {
  return (
    <Provider store={store}>
      <PageLayout />
    </Provider>
  );
}

export default App;
