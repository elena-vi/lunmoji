import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Luna emojis
        </p>
        <a
          className="App-link"
          href="lunmoji.zip"
          rel="noopener noreferrer"
        >
          Download here
        </a>
      </header>
    </div>
  );
}

export default App;
