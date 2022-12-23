import React from "react";
import { useState } from "react";
import userImage from "./image/user-image.jpeg";
import starImageEmpty from "./image/star-outline-empty.png";
import starImageFilled from "./image/star-outline-filled.png";
function App() {
	const [content] = useState({
		name: "Chrystian",
		surname: "Chwaja",
		email: "chrystianchwaja01@gmail.com",
		phone: "+48 999-111-111",
		isAccepted: false,
	});
	const [changeStar, setChangeStar] = useState(content.isAccepted);
	return (
		<main className="card">
			<article className="card--page">
				<img className="user--image" src={userImage} alt="user-image"></img>
				<div className="content">
					<button onClick={() => setChangeStar((prev) => !prev)}>
						{changeStar ? <img className="star--image" src={starImageEmpty}></img> : <img className="star--image" src={starImageFilled}></img>}
					</button>
					<p className="card--name">
						{content.name} {content.surname}
					</p>
					<p className="card--email">{content.email}</p>
					<p className="card--phone">{content.phone}</p>
				</div>
			</article>
		</main>
	);
}

export default App;
