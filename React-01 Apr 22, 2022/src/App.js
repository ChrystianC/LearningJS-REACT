import React from "react";
import Image from "./components/Image";
import Button from "./components/Buttons";
import About from "./components/About";
import Footer from "./components/Footer";
export default function App() {
	return (
		<div className="container">
			<Image />
			<Button />
			<About />
			<Footer />
		</div>
	);
}
