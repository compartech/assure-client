import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import BaseRouter from './routes.js';
import GlobalState from './context/GlobalState';

import './App.css';


function App() {

  return (
    <div className="App">
      <GlobalState>
        <Router hashType={"noslash"}>
          <BaseRouter />
        </Router>
      </GlobalState>
    </div>

  );
}

export default App;
