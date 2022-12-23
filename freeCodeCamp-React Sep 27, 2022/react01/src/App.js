import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Fotter";
import Addcard from "./components/AddCard";
import Pic from "./img/cards/pexels-merve-şahin-11161043.jpg";

export default function App() {
	const [dynamicCards, setDynamicCards] = useState([]); // lifted/shared state
	const onCardAdded = (addedCard) => {
		setDynamicCards((prevDynamicCards) => [...prevDynamicCards, addedCard]);
	};

	return (
		<div>
			<Navbar />
			<Main />
			<div>
				<div>
					<Card Image={Pic} Country="France" Title="Life lessons with Katie Zaferes" Cost={150} />

					{dynamicCards.map((card) => (
						<Card key={card.title} Image={card.image} Country={card.country} Title={card.title} Cost={card.cost} />
					))}
				</div>
				<Addcard onCardAdded={onCardAdded} />
			</div>
			<Footer />
		</div>
	);
}
