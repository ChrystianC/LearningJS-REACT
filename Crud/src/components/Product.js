import React, { useRef, useState } from "react";

export default function ProductData(Props) {
	const productRef = useRef(null);
	const [show, setShow] = useState(false);
	const [del, setDel] = useState(false);

	return (
		<div className="product" style={{ display: !del ? "inline" : "none" }}>
			<div className="product--style">
				<h4>Product {Props.Count} </h4>
				<button className="product--show" onClick={() => setShow(!show)}>
					&#8744;
				</button>

				<button className="product--edit" onClick={Props.edit}>
					&#x270E;
				</button>
				<button className="product--delete" onClick={Props.del}>
					&#x2718;
				</button>

				{show ? (
					<div className="show-text" ref={productRef}>
						<p>
							<b>Capmaing Name: </b>
							{Props.CampaignName}
						</p>
						<p>
							<b>Keyword: </b>
							{Props.Keywords}
						</p>
						<p>
							<b>Big amount : </b>
							{Props.BigAmount}
						</p>
						<p>
							<b>Campaing found : </b>
							{Props.BigAmount - Props.CampaignFound}
						</p>
						<p>
							<b>Staus : </b>
							{Props.OnOff}
						</p>
						<p>
							<b>Town :</b>
							{Props.Town}
						</p>
						<p>
							<b>Radius :</b>
							{Props.Radius}km
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
