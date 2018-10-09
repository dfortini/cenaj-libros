import React from "react";
import CSSModules from "react-css-modules";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Biblioteca from "./Biblioteca";

import "./css/_base.scss";
import styles from "./App.module.scss";

const App = () => (
  <Router>
    <div styleName="mainContainer">
      <Header />
      <Route path="/biblioteca" component={Biblioteca} />
      <Footer />
    </div>
  </Router>
);

export default CSSModules(App, styles);
