import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/front/App';
import Login from './components/home';
import Data from './components/data';
import RegisterPersonal from './components/registerpersonal'
import Land from './components/landing';
// import Dashboard_USER from "./components/dashboard";
// import Dashboard_ADMIN from "./components/";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="register" element={<RegisterPersonal />}/>
    <Route path="app" element={<App/>} />
    <Route path="/" element={<Land/>} />
    {/* <Route path="/" element={<Header/>} /> */}
    {/* <Route path="dashboard" element={<Dashboard/>} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);