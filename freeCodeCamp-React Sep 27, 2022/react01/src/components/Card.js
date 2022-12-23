import React, { useState } from "react";

export default function Card(props) {
	const [count, setCount] = useState(0);
	const [random, setRandom] = useState(Math.floor(Math.random() * 50 + 10) / 10);
	const [randomCost, setRandomCost] = useState(Math.floor(Math.random() * 150 + 1));

	function increment() {
		setCount((count) => count + 1);
	}
	return (
		<div className="Card-container">
			<div className="card-button-img">
				<div className="card-button">
					{count >= 1 ? (
						<div>
							<input className="card-heart crimson-heart" type="button" value="❤️" onClick={increment}></input>
							<span className="card-counter">{count}</span>
						</div>
					) : (
						<input className="card-heart" type="button" value="🤍" onClick={increment}></input>
					)}
				</div>

				<img src={props.Image} className="card-img" alt="WhereisPicture" title="image from pexels.com"></img>
			</div>
			<div className="card-description"></div>
			<div className="card-stats">
				<span className="rating-star" title="Rating">
					&#9733;<span>{random}</span>
				</span>

				<span className="card-gray" title="Country">
					{props.Country}
				</span>
				<span className="card-gray" title="Count of reviews post">
					({randomCost})
				</span>
			</div>
			<p className="card-bold" title="Title">
				{props.Title}
			</p>
			<p title="Cost per person">
				<span className="card-bold">From ${props.Cost}</span> / person
			</p>
		</div>
	);
}
