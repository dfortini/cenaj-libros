import React, { Component } from "react";
import logo from "./img/logo.svg";
import CSSModules from "react-css-modules";
import styles from "./index.module.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

console.log(styles);

class App extends Component {
  render() {
    return (
      <div styleName="mainContainer">
        <header>
          <div styleName="logo">
            <img src={logo} styleName="logoImage" alt="El Jauretche" />
            <div styleName="logoText">
              <p styleName="logoTitle">El Jauretche</p>
              <p styleName="logoSubtitle">CENTRO DE ESTUDIOS NACIONALES</p>
            </div>
          </div>
          <nav styleName="mainNav">
            <Router>
              <Link to="/" styleName="mainNavLinkActive">¿Quiénes somos?</Link>
            </Router>
            <Router>
              <Link to="/" styleName="mainNavLink">Biblioteca</Link>
            </Router>
            <Router>
              <Link to="/" styleName="mainNavLink">Contacto</Link>
            </Router>
          </nav>
        </header>
      </div>
    );
  }
}

export default CSSModules(App, styles);
