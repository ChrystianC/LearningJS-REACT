import React from "react";
import zero from "../img/template/6.jpg";
import one from "../img/template/3.jpg";
import two from "../img/template/8.jpg";
import three from "../img/template/5.jpg";
import four from "../img/template/4.jpg";
import five from "../img/template/0.jpg";
import six from "../img/template/1.jpg";
import seven from "../img/template/2.jpg";
import eight from "../img/template/7.jpg";

export default function Images() {
	return (
		<div className="Images-table-container">
			<div className="Images-table-column">
				<img src={zero} alt="from pexels" className="img-template" title="image from pexels.com"></img>
			</div>

			<div className="Images-table-column ">
				<img src={one} alt="from pexels" className="img-template " title="image from pexels.com"></img>

				<img src={two} alt="from pexels" className="img-template " title="image from pexels.com"></img>
			</div>
			<div className="Images-table-column ">
				<img src={seven} alt="from pexels" className="img-template" title="image from pexels.com"></img>

				<img src={eight} alt="from pexels" className="img-template" title="image from pexels.com"></img>
			</div>

			<div className="Images-table-column ">
				<img src={three} alt="from pexels" className="img-template" title="image from pexels.com"></img>

				<img src={four} alt="from pexels" className="img-template" title="image from pexels.com"></img>
			</div>

			<div className="Images-table-column ">
				<img src={five} alt="from pexels" className="img-template " title="image from pexels.com"></img>

				<img src={six} alt="from pexels" className="img-template" title="image from pexels.com"></img>
			</div>
		</div>
	);
}
