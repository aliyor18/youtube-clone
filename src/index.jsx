import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApi from './context/ContextApi.jsx';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <ContextApi>
      <App />
    </ContextApi>
  </BrowserRouter>
  </>
);

