import { createRoot } from 'react-dom/client';

import './scss/style.scss';

import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// const portalRoot = createRoot()

root.render(<App />);
