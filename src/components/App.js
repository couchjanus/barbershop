import React, { Component } from 'react';
import logo from './logo.svg';

// import './App.scss';
import styles from './App.scss';
class App extends Component {
 
  render() {
    const headerStyle = {
      color: '#fff',
      textDecoration: 'underline'
    }
    
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React Component</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code style={headerStyle}>src/components/App.js</code> and save to reload.
        </p>
        
      </div>
    );
  }
}

export default App;
