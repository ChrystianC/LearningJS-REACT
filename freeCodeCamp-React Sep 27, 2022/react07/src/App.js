import React from "react";
import { useState } from "react";

function App() {
	const [contact, setContact] = useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		itIs: true,
		employment: "",
		favColor: "",
	});
	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setContact((prevContact) => {
			return { ...prevContact, [name]: type === "checkbox" ? checked : value };
		});
	}
	function handleSubmit(event) {
		event.preventDefault();

		console.log(contact);
	}
	return (
		<main className="main--content">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Contact form</legend>
					<fieldset>
						<legend>Data of User</legend>
						<input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={contact.firstName}></input>
						<input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={contact.lastName}></input>
						<input type="email" placeholder="E-mail" onChange={handleChange} name="email" value={contact.email}></input>
						<textarea placeholder="Comments" onChange={handleChange} name="comments" value={contact.comments} />
						<input type="checkbox" className="radio" id="itIs" onChange={handleChange} name="itIs" checked={contact.itIs} />
						<label htmlFor="itIs">Are you sure?</label>
						<br />
					</fieldset>
					<fieldset>
						<legend>Current employment status</legend>
						<input type="radio" className="radio" id="unemployed" name="employment" value="unemployed" checked={contact.employment === "unemployed"} onChange={handleChange} />
						<label htmlFor="unemployed">Unemployed</label>
						<br />
						<input type="radio" className="radio" id="part-time" name="employment" value="part-time" checked={contact.employment === "part-time"} onChange={handleChange} />
						<label htmlFor="part-time">Part-time</label>
						<br />
						<input type="radio" className="radio" id="full-time" name="employment" value="full-time" checked={contact.employment === "full-time"} onChange={handleChange} />
						<label htmlFor="full-time">Full-time</label>
						<br />
						<label htmlFor="favColor">What is your favorite color?</label>
						<br />
						<select id="favColor" value={contact.favColor} onChange={handleChange} name="favColor">
							<option value="" disabled>
								select your option
							</option>
							<option value="yellow">Yellow</option>
							<option value="green">Green</option>
						</select>
					</fieldset>
					<button>Submit</button>
				</fieldset>
			</form>
		</main>
	);
}

export default App;
