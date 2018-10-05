import React, { Component } from 'react';
import logo from './img/logo.svg';
import CSSModules from 'react-css-modules';
import styles from './index.module.scss';

console.log(styles);

class App extends Component {
  render() {
    return (
      <div styleName="mainContainer">
        <header styleName="">
        <h1>Hola soy la app</h1>
        <img src={logo} styleName="" alt="logo" />
        </header>
      </div>
    );
  }
}

export default CSSModules(App, styles);