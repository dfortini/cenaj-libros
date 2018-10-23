import React, { Component } from "react";
import CSSModules from "react-css-modules";

import "./css/_base.scss";
import styles from "./Inicio.module.scss";

import hero from "./img/quienesSomos/hero.jpg";


class Inicio extends Component {
  render() {
    return (
      <>
        <section styleName="HeroHome">
        <img src={hero} styleName="HeroImage" alt="El Jauretche" />
        <div styleName="HeroText">El Jauretche tuvo, tiene y tendrá como objetivo ser una usina del pensamiento nacional y popular.</div>
        </section>
        <div styleName="VideosTitle">
        <h2>VIDEO CHARLAS</h2></div>
      </>
    );
  }
}

export default CSSModules(Inicio, styles);
