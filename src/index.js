import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TermProvider} from "./api/TermContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <TermProvider>
      <App />
    </TermProvider>
  </React.StrictMode>
  
);
