import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-KRDKS6ZLX9');
};

ReactDOM.render(
  <React.StrictMode>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRDKS6ZLX9"></script>
  <script>{injectGA()}</script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
