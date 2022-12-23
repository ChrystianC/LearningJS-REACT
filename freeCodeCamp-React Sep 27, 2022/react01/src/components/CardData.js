import { useEffect, useState } from "react";
import { StoreProperties } from "./AddCard";
export default function CardData({ RenderingComponent }) {
	const [storageStuff, setStorageStuff] = useState([]);

	useEffect(() => {
		// const onStorage = () => {
		// 	Object.entries(localStorage).map(([valueJSON]) => {
		// 		const valueStorage = JSON.parse(valueJSON);
		// 		console.log("valueJSON:", valueJSON, " /valueStorage:", valueStorage);
		// 		setStorageStuff((prevStorageStuff) => [...prevStorageStuff, valueStorage]);
		// 		return console.log(storageStuff);
		// 	});
		// };
		// window.addEventListener("storage", onStorage);

		// return () => window.removeEventListener("storage", onStorage); cleanup hook
		setStorageStuff((prevStorageStuff) => [...prevStorageStuff, StoreProperties]);
	}, []);

	return storageStuff.map((item) => {
		return <RenderingComponent key="{item.key}" Image={item.image} Country={item.country} Title={item.title} Cost={item.cost} />;
	});
}
