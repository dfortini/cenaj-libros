import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => (
<footer>
    <strong>EL JAURETCHE | Centro de Estudios Nacionales</strong> | Bolívar
    1511, CABA, Argentina | <Link to="tel:+541526737845">152 673 7845</Link> |{" "}
    <Link to="mailto:cenjauretche@gmail.com">cenjauretche@gmail.com</Link>
</footer>
);

export default CSSModules(Footer, styles);
