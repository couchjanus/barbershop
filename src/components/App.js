import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList';

class App extends Component {
 
  
  render() {

    const headerStyle = {
      color: '#ff0000',
      textDecoration: 'underline'
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Component</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code style={headerStyle}>src/components/App.js</code> and save to reload.
        </p>
        <MessageList />
      </div>
    );
  }
}

export default App;
