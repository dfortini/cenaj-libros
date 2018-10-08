import React from "react";
import CSSModules from "react-css-modules";
import { BrowserRouter as Router, Link } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "./img/logo.svg";

const Header = () => (
    <header>
        <div styleName="logo">
        <img src={logo} styleName="logoImage" alt="El Jauretche" />
        <div styleName="logoText">
            <p styleName="logoTitle">El Jauretche</p>
            <p styleName="logoSubtitle">CENTRO DE ESTUDIOS NACIONALES</p>
        </div>
        </div>
        <nav styleName="mainNav">
        <Link to="/quienesSomos" styleName="mainNavLink">Quienes Somos</Link>
        <Link to="/biblioteca" styleName="mainNavLink">Biblioteca</Link>
        <Link to="/contacto" styleName="mainNavLink">Contacto</Link>
        </nav>
    </header>    
);

export default CSSModules(Header, styles);
