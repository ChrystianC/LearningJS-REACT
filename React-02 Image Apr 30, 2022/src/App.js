import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Fotter";
import Addcard from "./components/AddCard";
import Props from "./components/Props";
export default function App() {
	var Cards = [];

	for (let i = 0; i < Props.length; i++) {
		Cards.push(<Card {...Props[i]} key={i} />);
	}

	return (
		<div>
			<Navbar />
			<Main />
			<Card Img="pexels-merve-şahin-11161043.jpg" Rating={4.9} ReviewPost={48} Country="France" Title="Life lessons with Katie Zaferes" Cost={150} />
			{Cards}
			<Addcard />
			<Footer />
		</div>
	);
}
