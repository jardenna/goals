import { createRoot } from 'react-dom/client';

import './scss/style.scss';

import App from './components/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
