import React, { useState } from "react";
export const StoreProperties = React.createContext(null);

export default function Addcard({ onCardAdded }) {
	const [count, setCount] = useState(1);
	const [props1, setProps] = useState({
		key: "",
		image: "",
		country: "",
		title: "",
		cost: "",
	});

	const inputChange = ({ target }) => {
		const inputIdentity = target.dataset.identity;
		setProps((props1) => ({ ...props1, [inputIdentity]: target.value }));
	};

	const SendtoStorage = (event) => {
		window.localStorage.setItem(`@${props1.key}`, JSON.stringify(props1));

		onCardAdded(props1); // notify parent component about newly added card

		setCount((count) => (count = 1));
		<StoreProperties.Provider value={props1}> </StoreProperties.Provider>;
		setProps(
			(props1) =>
				(props1 = {
					key: "",
					image: "",
					country: "",
					title: "",
					cost: "",
				})
		);
		event.preventDefault();
	};

	const plus = () => {
		setCount((count) => (count = 0));
	};

	return (
		<div className="Card-container Card-container-add">
			{count === 1 ? (
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
				<div>
					<form className="Card-inputs" onSubmit={SendtoStorage}>
						<input className="addcard-inputs" id="input-0" onChange={inputChange} value={props1.key} placeholder="Name" data-identity="key"></input>
						<input className="addcard-inputs" id="input-1" onChange={inputChange} value={props1.image} placeholder="Image url" data-identity="image"></input>
						<input className="addcard-inputs" id="input-4" onChange={inputChange} value={props1.country} placeholder="Country" data-identity="country"></input>
						<input className="addcard-inputs" id="input-5" onChange={inputChange} value={props1.title} placeholder="Title" data-identity="title"></input>
						<input className="addcard-inputs" id="input-6" onChange={inputChange} value={props1.cost} placeholder="Cost" data-identity="cost"></input>
						<input type="submit" value="Save" id="sumbit" className="addcard-inputs-button"></input>
					</form>
				</div>
			)}
		</div>
	);
}
