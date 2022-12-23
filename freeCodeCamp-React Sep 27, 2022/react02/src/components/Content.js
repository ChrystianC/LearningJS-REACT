import React from "react";

function Content(props) {
	return (
		<section className="content">
			<img src={props.ImageUrl} className="img--content" alt="Mount"></img>
			<div className="text-content">
				<div className="local--content">
					<i className="fa fa-map-marker" id="local"></i>
					<span>{props.Location}</span>
					<a href={props.GoogleMapsurl}>View on Google maps</a>
				</div>
				<h1 className="title-content">{props.Title}</h1>
				<div className="description-content">
					<p className="date-content">
						{props.StartDate} - {props.EndDate}
					</p>
					<p className="des-content">{props.Description}</p>
				</div>
			</div>
		</section>
	);
}
export default Content;
