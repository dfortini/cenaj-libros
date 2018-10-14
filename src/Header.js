import React from "react";
import CSSModules from "react-css-modules";
import { NavLink } from "react-router-dom";

import { menus } from "./Common";

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
      {menus.map(({ to, text }) => (
        <NavLink
          key={to}
          to={to}
          styleName="mainNavLink"
          activeClassName="mainNavLinkActive"
        >
          {text}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default CSSModules(Header, styles);
