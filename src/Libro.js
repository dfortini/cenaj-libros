import React, { Component } from "react";
import CSSModules from "react-css-modules";

import "./css/_base.scss";
import styles from "./Libro.module.scss";

import placeholder from "./img/book-placeholder.svg";

class Libro extends Component {
  render() {
    return (
      <section styleName="bookContainer">
        <div styleName="bookLeft">
          <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
        </div>
        <div styleName="bookRight">
          <h1>¿Qué es la izquierda Nacional?</h1>
          <div styleName="bookMeta">
            <h4>
              De <strong>José Luis Madariaga</strong>
            </h4>
            <h4>
              Prólogo de <strong>Norberto Galasso</strong>
            </h4>
            <h4>
              Epílogo de <strong>Néstor Gorojovsky</strong>
            </h4>
          </div>
          <div styleName="bookDescription">
            <p>
              Hoy como ayer, ¿Qué es la Izquierda Nacional? señala las vías de
              ingreso a un nuevo nivel histórico. Añejo pero no anticuado, tiene
              la solera del buen vino. Alienta en él, poderoso, un futuro que
              está por escribirse. Brasa viva de los tiempos que parieron el
              cordobazo, alumbra sendas importantes para quienes heredamos,
              entre otras cosas, el 17 de octubre de 1945 y el 19 de diciembre
              de 2001.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default CSSModules(Libro, styles);
