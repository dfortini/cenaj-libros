import React, { Component } from "react";
import CSSModules from "react-css-modules";

import "./css/_base.scss";
import styles from "./Biblioteca.module.scss";

class Biblioteca extends Component {
  render() {
    return (
  
        <div styleName="sectionTitle">
          <h1>Biblioteca</h1>
          <p>
            Buscamos junto a Publicaciones del Sur recuperar escritos históricos
            y promocionar letras nacientes aportando a la cultura
            latinoamericana.
          </p>
        </div>
    );
  }
}

export default CSSModules(Biblioteca, styles);
