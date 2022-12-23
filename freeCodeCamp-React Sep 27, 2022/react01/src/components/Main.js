import React from "react";
import ImageTemplate from "./ImageTemplate";

export default React.memo(function Main() {
	return (
		<section>
			<ImageTemplate />
			<h1 className="main-content">Welcome in site Air</h1>
			<p className="main-content-p">Here`s u can post your images by YOUR self. And share your memories with others. Join our unique society</p>
		</section>
	);
});
