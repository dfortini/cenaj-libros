import React from "react";
import CSSModules from "react-css-modules";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

import "./css/_base.scss";
import styles from "./App.module.scss";

const App = () => (
  <Router>
    <div styleName="mainContainer">
      <Header />
    </div>
  </Router>
);

export default CSSModules(App, styles);
