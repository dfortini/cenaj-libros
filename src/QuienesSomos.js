import React, { Component } from "react";
import CSSModules from "react-css-modules";

import "./css/_base.scss";
import styles from "./QuienesSomos.module.scss";

import hero from "./img/quienesSomos/hero.jpg";

class QuienesSomos extends Component {
  render() {
    return (
      <>
        <section styleName="sectionTitle">
          <h1>¿Quiénes Somos?</h1>
          <p>
            Nuestro problema es concreto: somos una Nación o somos una granja.
            Producimos para la grandeza de nuestro Pueblo o para la grandeza de
            otro.
          </p>
        </section>
        <article>
          <img src={hero} styleName="hero" alt="El Jauretche" />
          <p>
            <strong>
              El mundo se veía conmovido. Un puñado de poetas armados ponían fin
              a la sangrienta dinastía somocista en la Nicaragua de Sandino.
            </strong>
            Un anciano, el ayatola Jomeini, desde su exilio parisino, obligaba
            al sha Reza Pahlevi y su bella mujer a abandonar Teherán con
            vertiginoso sigilo seguidos desde cerca por las masas
            revolucionarias que imponían la República Islámica.
          </p>

          <p>
            En tanto, la Rusia stalinista desembarcaba con sus tanques en los
            pedregosos «pantanos» de Afganistán.
            <strong>
              En nuestro país la alianza de los usurpadores Videla-Martínez de
              Hoz comenzaba a agrietarse. Una tenue luz de verdad se insinuaba
              sobre la sangrienta noche
            </strong>
            . El fantasma de treinta mil argentinos asesinados, arrancados de
            sus hogares, lugares de trabajo o de las calles a plena luz del día,
            recorría redacciones de diarios, golpeaba puertas y clamaba
            justicia.
          </p>
        </article>
        <article>
          <div styleName="articleTitle">
            <h2>El centro durante la dictadura</h2>
          </div>
          <div styleName="articleText">
            <p>
              El llamado «proceso de reorganización nacional» ya desde el nombre
              se proclamaba continuador en el siglo XX de la «organización
              nacional» iniciada por la tétrica dictadura de Mitre en el siglo
              XIX. Impuso la doctrina de la «seguridad nacional», versión
              actualizada con la que la «civilización» oligárquica se impuso a
              la «barbarie» para posicionar los intereses agroganaderos en la
              nueva división internacional del trabajo. La historia volvía a
              repetirse, corregida y aumentada.
            </p>
            <p>
              ​En respuesta a la presencia de la comisión de DDHH de la OEA, el
              régimen intentó tapar el sol con millones de autoadhesivos con la
              consigna «Los argentinos somos derechos y humanos», y con campañas
              de adhesión realizadas desde las revistas paquetas voceras de la
              dictadura criminal.
            </p>
            <p>
              ​Ese mismo año, un 25 de Mayo, se realiza el primer acto de
              Homenaje a don Arturo Jauretche, en la sede de las Universidades
              Populares Argentinas. Cuatro años antes un grupo de militantes de
              la Izquierda Nacional, Jorge Enea Spilimbergo, Roberto Vera, Hugo
              Andrade y Miguel Rodas entre otros, previendo la interrupción
              institucional, comenzaron a diseñar una táctica que permitiera
              hacer política bajo formas que se adaptaran a situaciones más
              acotadas.
            </p>
          </div>
        </article>
      </>
    );
  }
}

export default CSSModules(QuienesSomos, styles);
