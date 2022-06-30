import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const Imdb = require('./assets/icons8-imdb-50.png');
export const Apple = require('./assets/icons8-apple-logo-50.png');
export const Facebook = require('./assets/icons8-facebook-50.png');
export const Google = require('./assets/icons8-google-50.png');
export const Amazon = require('./assets/icons8-amazon-50.png');