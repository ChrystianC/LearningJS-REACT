import React, { useState } from "react";
import Product from "./Product";
export const ProductProperties = React.createContext(null);

function makeid(length) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}
function Navbar() {
	const [option, setOption] = useState(false);
	const [productNum, setProductNum] = useState(1);
	const [cheat, setCheat] = useState(false);
	const [product, setProduct] = useState({
		key: productNum,
		campaignName: "",
		keywords: makeid(5),
		bigAmount: "",
		campaignFound: "",
		onOff: "",
		town: "",
		radius: "",
	});
	const [dynamicProduct, SetDynamicProduct] = useState([]);
	const onProductAdd = (addProduct) => {
		SetDynamicProduct((prev) => [...prev, addProduct]);
	};

	const contractors = () => {
		setOption(!option);
	};
	const Submit = (event) => {
		// <--historia -->
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		console.log(`submit product${productNum} ${time}`);
		//<-- end ->>
		setProductNum((productNum) => productNum + 1);
		console.log(productNum);
		onProductAdd(product);
		<ProductProperties value={product}></ProductProperties>;
		setProduct(
			(product) =>
				(product = {
					key: productNum,
					campaignName: "",
					keywords: makeid(5),
					bigAmount: "",
					campaignFound: "",
					onOff: "",
					town: "",
					radius: "",
				})
		);

		setOption(!option);
		setCheat(!cheat);
		event.preventDefault();
	};

	const inputChange = ({ target }) => {
		const inputId = target.dataset.identity;
		setProduct((product) => ({
			...product,
			[inputId]: target.value,
		}));
	};
	const del = (e) => {
		// <--historia -->
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		console.log(`deleted product ${productNum} ${time}`);
		//<-- end ->>
		//usuń produkt

		// dynamicProduct.filter((r) => r !== e);
	};

	const edit = (e, newCampaignName, newKeywords, newBigAmount, newCampaignFound, newOnOff, newTown, newRadius) => {
		// <--historia -->
		var today = new Date();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		console.log(`edited product ${productNum} ${time}`);
		//<-- end ->>
		// edit value form p
		// 		SetDynamicProduct.map(dynamicProduct.map((item)=>{
		//   return item.key == e? ({
		// 									CampaignName:newCampaignName,
		// 									Keywords:newKeywords,
		// 									BigAmount:newBigAmount,
		// 									CampaignFound:newCampaignFound,
		// 									OnOff:newOnOff,
		// 									Town:newTown,
		// 									newRadius:item.radius,
		//   }):item));
		// setOption(!option);
	};
	return (
		<article className="navbar">
			<button className="nav-button-contractors" onClick={contractors}>
				Add new Product
			</button>

			{option === true ? (
				<div className="modal">
					<form className="main--form" onSubmit={Submit}>
						<input className="form--input" placeholder="Campaign Name" onChange={inputChange} value={product.campaignName} data-identity="campaignName" required></input>
						<input className="form--input" placeholder="Keywords" onChange={inputChange} value={product.keywords} data-identity="keywords" required></input>
						<input
							type="number"
							className="form--input"
							placeholder="Big amount"
							onChange={inputChange}
							value={product.bigAmount}
							data-identity="bigAmount"
							min="50"
							required
						></input>
						<input
							type="number"
							className="form--input"
							placeholder="Campaing found"
							onChange={inputChange}
							value={product.campaignFound}
							data-identity="campaignFound"
							required
						></input>
						<select onChange={inputChange} value={product.onOff} data-identity="onOff" required>
							<option value="ON">Status ON</option>
							<option value="OFF">Status Off</option>
						</select>
						<select className="form--input" onChange={inputChange} value={product.town} data-identity="town" required>
							<option value="Cracow">Cracow</option>
							<option value="Warsaw">Warsaw</option>
							<option value="Rzeszów">Rzeszów</option>
							<option value="Gdańsk">Gdańsk</option>
						</select>
						<input type="number" className="form--input" placeholder="Radius" onChange={inputChange} value={product.radius} data-identity="radius" required></input>
						<input className="form--input submit" type="submit" onChange={inputChange} value="Send"></input>
					</form>
				</div>
			) : (
				<div>
					<h1>Products</h1>
					<div className="product--container">
						<div className="one-product">
							{dynamicProduct.map((product) => (
								<Product
									key={productNum}
									CampaignName={product.campaignName}
									Keywords={product.keywords}
									BigAmount={product.bigAmount}
									CampaignFound={product.campaignFound}
									OnOff={product.onOff}
									Town={product.town}
									Radius={product.radius}
									del={del}
									edit={edit}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</article>
	);
}

export default Navbar;
