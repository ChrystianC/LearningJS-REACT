import React, { useEffect, useState } from "react";
import memesData from "../data/memesData";

function Form() {
	const [inputValueTop, setInputValueTop] = useState({ valueTop: "" });
	const [inputValueBottom, setInputValueBottom] = useState({ valueBottom: "" });
	const [changeImage, setChangeImage] = useState("");
	// Assign the meme from array located in file memesData
	const memes = memesData.data.memes;
	const listOfMemes = memes.map((meme) => meme.url);
	let indexOfMeme = Object.keys(listOfMemes);

	//displaying an image with loading  page
	useEffect(() => {
		setChangeImage(listOfMemes[indexOfMeme[Math.floor(Math.random() * indexOfMeme.length)]]);
	}, []);

	function submitClick(e) {
		setChangeImage(listOfMemes[indexOfMeme[Math.floor(Math.random() * indexOfMeme.length)]]);

		e.preventDefault();
	}
	function onChangeTop(e) {
		setInputValueTop({
			valueTop: e.target.value,
		});
	}
	function onChangeBottom(e) {
		setInputValueBottom({
			valueBottom: e.target.value,
		});
	}
	return (
		<main className="main">
			<form className="form" onSubmit={submitClick}>
				<input className="form-input" type="text" name="name" placeholder="Top text" onChange={onChangeTop} value={inputValueTop.valueTop} />
				<input className="form-input" type="text" name="type" placeholder="Bottom text" onChange={onChangeBottom} value={inputValueBottom.valueBottom} />
				<input className="form-input-submit" type="submit" value="Search for new one" />
			</form>
			<article className="meme-display">
				<span className="meme-display-text-top" onChange={onChangeTop}>
					{inputValueTop.valueTop}
				</span>
				<img className="meme-display-image" src={changeImage} alt="meme img" width="300px" height="300px"></img>
				<span className="meme-display-text-bottom" onChange={onChangeBottom}>
					{inputValueBottom.valueBottom}
				</span>
			</article>
		</main>
	);
}
export default Form;
