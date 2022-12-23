import React, { useState } from "react";
import { useEffect } from "react";
import { ProductProperties } from "./Navbar";
function ProductData({ RenderComponent }) {
	const [productStuff, setProductStuff] = useState([]);
	useEffect(() => {
		setProductStuff((prev) => [...prev, ProductProperties]);
	}, []);

	return productStuff.map((item) => {
		return (
			<RenderComponent
				key={item.count}
				edit={item}
				del={item}
				CampaignName={item.campaignName}
				Keywords={item.keywords}
				BigAmount={item.bigAmount}
				CampaignFound={item.campaignFound}
				OnOff={item.onOff}
				Town={item.town}
				Radius={item.radius}
			/>
		);
	});
}
export default ProductData;
