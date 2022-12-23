import React from "react";
import { useState } from "react";
import boxes from "./components/boxes";
import Box from "./components/Box";
function App() {
	const [square, setSquare] = useState(boxes);
	function toggle(id) {
		setSquare((prev) => {
			return prev.map((square) => {
				return square.id === id ? { ...square, on: !square.on } : square;
			});
		});
	}

	const arrayOfBoxes = square.map((box) => {
		return <Box On={box.on} key={box.id} Id={box.id} handleClick={toggle} />;
	});

	return (
		<main className="main--content">
			<h1>Boxes will go here</h1>
			{arrayOfBoxes}
		</main>
	);
}

export default App;
