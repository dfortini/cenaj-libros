import React from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "./img/logo.svg";

const menus = [
	{ to: "/quienesSomos", text: "Quienes Somos"},
	{ to: "/biblioteca", text: "Biblioteca" },
	{ to: "/contacto", text: "Contacto" }
];

const Header = () => (
	<header>
		<div styleName="logo">
			<img src={logo} styleName="logoImage" alt="El Jauretche" />
			<div styleName="logoText">
				<p styleName="logoTitle">El Jauretche</p>
				<p styleName="logoSubtitle">CENTRO DE ESTUDIOS NACIONALES</p>
			</div>
		</div>
		<nav styleName="mainNav">
			{menus.map(({ to, text }) => <Link key={to} to={to} styleName="mainNavLink">{text}</Link>)}
		</nav>
	</header>
);

export default CSSModules(Header, styles);