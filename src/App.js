import React, { Component } from 'react';
import brush from './brush.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={brush} className="App-logo" alt="logo" />
          <h2>Under Construction</h2>
        </div>
        <p className="App-intro">
          For more information, call: <code>414-587-8088</code>
        </p>
      </div>
    );
  }
}

export default App;
