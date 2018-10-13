import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Layout from "./Layout";
import Biblioteca from "./Biblioteca";
import QuienesSomos from "./QuienesSomos";
import Libro from "./Libro";

import "./css/_base.scss";

const App = () => (
  <Router>
    <Layout>
      <Route path="/biblioteca" component={Biblioteca} />
      <Route path="/quienesSomos" component={QuienesSomos} />
      <Route path="/libro" component={Libro} />
    </Layout>
  </Router>
);

export default App;
