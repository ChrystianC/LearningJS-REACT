import React from "react";
import Pic from "../img/unnamed.jpg";
function Header() {
	return (
		<header className="header">
			<img className="header-img" src={Pic} alt="whatever"></img>
			<h3 className="header-h3">Meme generator</h3>
			<h4 className="header-h4">React-Course-04</h4>
		</header>
	);
}
export default Header;
