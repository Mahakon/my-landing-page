import React, { Component } from 'react';
import ava from './ava.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ava} className="App-logo" alt="ava" />
          <h2>Welcome to my Github</h2>
        </div>
        <p className="App-intro">
          Just follow me to see all news in IT!
        </p>
      </div>
    );
  }
}

export default App;
