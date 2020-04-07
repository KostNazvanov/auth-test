import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
