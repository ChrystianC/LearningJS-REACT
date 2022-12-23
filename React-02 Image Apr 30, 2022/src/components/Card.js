import React, { useState } from "react";

export default function Card(props) {
	const [count, setCount] = useState(0);
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

				<img src={require(`../img/cards/${props.Img}`)} className="card-img" alt="bitch" title="image from pexels.com"></img>
			</div>
			<div className="card-description"></div>
			<div className="card-stats">
				<span className="rating-star" title="Rating">
					&#9733;<span>{props.Rating}</span>
				</span>

				<span className="card-gray" title="Country">
					{props.Country}
				</span>
				<span className="card-gray" title="Count of reviews post">
					({props.ReviewPost})
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
