import React, { Component } from "react";
import CSSModules from "react-css-modules";

import "./css/_base.scss";
import styles from "./Contacto.module.scss";

import hero from "./img/quienesSomos/hero.jpg";

class Contacto extends Component {
  render() {
    return (
      <>
        <section styleName="sectionTitle">
          <h1>Contacto</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            tellus, aliquet at auctor vitae, commodo sit amet lorem.
          </p>
        </section>
        <article>
          <img src={hero} styleName="hero" alt="El Jauretche" />
          <p>
            Suspendisse pellentesque lacus ut leo auctor dignissim. Nullam eget
            mauris efficitur, imperdiet lectus eu, posuere ex. Donec dolor ante,
            sollicitudin non ultricies ac, vulputate et sapien. Mauris turpis
            orci, pulvinar eu rutrum id, elementum a risus. Vivamus risus odio,
            posuere at lacus vulputate, commodo dictum orci. Morbi ac dolor a
            orci finibus tempus ac vel tortor.
          </p>
        </article>
      </>
    );
  }
}

export default CSSModules(Contacto, styles);
