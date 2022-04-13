import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './pages/Login/';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global"

import App from "./pages/App"
import { Dashboard } from "./components/Dashboard";
import { ConsultTable } from "./components/ConsultTable";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />}>
          <Route index element={<Dashboard />}/>
          <Route path="consulta" element={<ConsultTable />}/>
        </Route>
      </Routes>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);