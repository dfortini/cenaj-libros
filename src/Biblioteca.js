import React, { Component } from "react";
import CSSModules from "react-css-modules";

import "./css/_base.scss";
import styles from "./Biblioteca.module.scss";

import placeholder from "./img/book-placeholder.svg";

class Biblioteca extends Component {
  render() {
    return (
      <>
        <section styleName="sectionTitle">
          <h1>Biblioteca</h1>
          <p>
            Buscamos junto a Publicaciones del Sur recuperar escritos históricos
            y promocionar letras nacientes aportando a la cultura
            latinoamericana.
          </p>
        </section>
        <section styleName="search">
          {/* TODO: ver como se agrega el formulario */}
        </section>
        <section styleName="bookList">
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
          <div styleName="bookInList">
            <img src={placeholder} styleName="bookPicture" alt="LibroNombre" />
            <h4>¿Qué es la izquierda Nacional?</h4>
            <p>José Luis Madariaga</p>
          </div>
        </section>
      </>
    );
  }
}

export default CSSModules(Biblioteca, styles);
