import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import ContentData from "./ContentData";
function Main() {
	const cards = ContentData?.map((item) => {
		return (
			<Content
				key={item.id}
				ImageUrl={item.imageUrl}
				Location={item.location}
				GoogleMapsurl={item.googleMapsurl}
				Title={item.title}
				StartDate={item.startDate}
				EndDate={item.endDate}
				Description={item.description}
			/>
		);
	});
	return (
		<div className="container">
			<Navbar />
			{cards}
		</div>
	);
}
export default Main;
