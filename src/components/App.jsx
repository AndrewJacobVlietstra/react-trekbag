import { useState } from "react";
import { defaultListItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

export default function App() {
	const [items, setItems] = useState(defaultListItems);

	const handleAddItem = (newItemText) => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		};

		const newItems = [...items, newItem];
		return setItems(newItems);
	};

	return (
		<>
			<BackgroundHeading />

			<main>
				<Header />
				<ItemList items={items} />
				<Sidebar handleAddItem={handleAddItem} />
			</main>

			<Footer />
		</>
	);
}
