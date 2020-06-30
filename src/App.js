import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import BaseRouter from './routes.js';
import GlobalState from './context/GlobalState';

import './App.css';


function App() {

  return (
    <div className="App">
      <GlobalState>
        <Router>
          <BaseRouter />
        </Router>
      </GlobalState>
    </div>

  );
}

export default App;
