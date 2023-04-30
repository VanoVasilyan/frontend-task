import { createRoot } from 'react-dom/client';
import { AppProvider } from './context/context';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
