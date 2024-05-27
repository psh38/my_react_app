import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//.js생략해서 가져옴 컴포넌트만 생략가능

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

