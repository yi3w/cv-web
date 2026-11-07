import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

document.documentElement.classList.remove('no-js');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
