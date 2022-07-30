import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TermProvider} from "./api/TermContext"
import { HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <TermProvider>
      <HashRouter basename='/'>
        <App />
      </HashRouter>
    </TermProvider>
  </React.StrictMode>
  
);
