import React from "react";
import IMG from "../img/logo192.png";

export default function Image() {
	return (
		<div className="Image">
			<img className="IMG" src={IMG} alt="bitch"></img>
			<h2>Chrystian Chwaja</h2>
			<p>Frontend Developer</p>

			<a href="#">chrystian.cle.cracow@gmail.com</a>
		</div>
	);
}
