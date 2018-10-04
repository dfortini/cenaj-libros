import React, { Component } from 'react';
import logo from './img/logo.svg';
import CSSModules from 'react-css-modules';
import styles from './App.module.scss';
console.log(styles);

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            styleName="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default CSSModules(App, styles);