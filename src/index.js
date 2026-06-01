import React from 'react';
import ReactDOM from 'react-dom/client';
// Using the Tailwind Play CDN in development to avoid PostCSS plugin errors.
// Remove this comment and re-enable the local import if you fix the PostCSS setup
// and want to compile Tailwind locally.
import App from './App';
// if you need the default CRA styles later you can also import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
