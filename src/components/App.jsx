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

	const handleDeleteItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		return setItems(newItems);
	};

	const handleToggleItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, packed: !item.packed };
			}
			return item;
		});
		return setItems(newItems);
	};

	const handleRemoveAllItems = () => {
		return setItems([]);
	};

	const handleResetToInitial = () => {
		return setItems([...defaultListItems]);
	};

	const handleMarkAllAsComplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true };
		});

		return setItems(newItems);
	};

	const handleMarkAllAsIncomplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false };
		});

		return setItems(newItems);
	};

	return (
		<>
			<BackgroundHeading />

			<main>
				<Header />
				<ItemList
					items={items}
					handleToggleItem={handleToggleItem}
					handleDeleteItem={handleDeleteItem}
				/>
				<Sidebar
					handleAddItem={handleAddItem}
					handleRemoveAllItems={handleRemoveAllItems}
					handleResetToInitial={handleResetToInitial}
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				/>
			</main>

			<Footer />
		</>
	);
}
