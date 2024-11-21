import { useEffect, useState } from "react";
import { defaultListItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function App() {
	// Function inside useState will only run when component mounts
	// this is to avoid calling localStorage every re-render
	const [items, setItems] = useState(
		() => JSON.parse(localStorage.getItem("items")) || defaultListItems
	);

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

	const totalItems = () => items.length;

	const totalPackedItems = () => {
		const packedItems = items.filter((item) => item.packed).length;
		return packedItems;
	};

	const totalProgress = () => {
		let progressPercentage = Math.floor(
			(totalPackedItems() / totalItems()) * 100
		);
		if (isNaN(progressPercentage)) {
			return (progressPercentage = 0);
		}

		return progressPercentage;
	};

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	return (
		<>
			<BackgroundHeading />

			<main>
				<Header>
					<Logo />
					<Counter
						totalItems={totalItems}
						totalPackedItems={totalPackedItems}
						totalProgress={totalProgress}
					/>
					<ProgressBar totalProgress={totalProgress} />
				</Header>

				<ItemList
					items={items}
					handleToggleItem={handleToggleItem}
					handleDeleteItem={handleDeleteItem}
				/>

				<Sidebar>
					<AddItemForm onAddItem={handleAddItem} />
					<ButtonGroup
						handleRemoveAllItems={handleRemoveAllItems}
						handleResetToInitial={handleResetToInitial}
						handleMarkAllAsComplete={handleMarkAllAsComplete}
						handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
					/>
				</Sidebar>
			</main>

			<Footer />
		</>
	);
}
