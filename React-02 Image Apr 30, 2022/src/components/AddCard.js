import React, { useState } from "react";
import props from "./Props";

export default function Addcard() {
	const [count, setCount] = useState(0);
	function AddCard() {
		props.push({
			Img: document.querySelector("#input-1").value,
			Rating: document.querySelector("#input-2").value,
			ReviewPost: document.querySelector("#input-3").value,
			Country: document.querySelector("#input-4").value,
			Title: document.querySelector("#input-5").value,
			Cost: document.querySelector("#input-6").value,
		});
	}
	setCount((count) => (count = 0));

	function plus() {
		setCount((count) => (count = 1));
	}
	return (
		<div className="Card-container Card-container-add">
			{count === 0 ? (
				<div className="Card-arrows">
					<span className="arrow-n-e">&#8598; </span>
					<span className="arrow-n-w"> &#8599; </span>
					<button className="addcard-button" onClick={plus}>
						+
					</button>
					<span className="arrow-s-e">&#8600; </span>
					<span className="arrow-s-w"> &#8601;</span>
				</div>
			) : (
				<div className="Card-inputs">
					<input className="addcard-inputs" id="input-1" placeholder="Image url"></input>
					<input className="addcard-inputs" id="input-2" placeholder="Rating"></input>
					<input className="addcard-inputs" id="input-3" placeholder="ReviewPost"></input>
					<input className="addcard-inputs" id="input-4" placeholder="Country"></input>
					<input className="addcard-inputs" id="input-5" placeholder="Title"></input>
					<input className="addcard-inputs" id="input-6" placeholder="Cost"></input>
					<input type="button" value="Save" onClick={AddCard} className="addcard-inputs-button"></input>
				</div>
			)}
		</div>
	);
}
