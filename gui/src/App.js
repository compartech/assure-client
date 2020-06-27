import React from 'react';
// import logo from './logo.svg';
import logo from './logo-coccinelle.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Best insurance for : <code> Automobile / Housing / .... </code>
        </p>
        <a
          className="App-link"
          href="https://github.com/compartech"
          target="_blank"
          rel="noopener noreferrer"
        >
          We are coming
        </a>
      </header>
    </div>
  );
}

export default App;
