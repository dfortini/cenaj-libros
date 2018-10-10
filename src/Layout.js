import React from "react";
import CSSModules from "react-css-modules";

import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div styleName="mainContainer">
    <Header />
    <div styleName="mainContent">{children}</div>
    <Footer />
  </div>
);

export default CSSModules(Layout, styles);
