import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Login } from './pages/Login/';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);