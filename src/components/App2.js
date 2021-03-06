import React, { Component } from 'react';
import logo from './logo.svg';

import styles from './App.scss';

class Welcome extends React.Component {

    render() {
    return <h1>Hello, {this.props.message}</h1>;
  }
}

class App2 extends Component {
    
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
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <p className={styles.AppIntro}>
          To get started, edit <code style={headerStyle}>src/components/App.js</code> and save to reload.
        </p>

        <Welcome message="Bla, Bla, Bla..." />;

      </div>
    );
  }
}

export default App2;
