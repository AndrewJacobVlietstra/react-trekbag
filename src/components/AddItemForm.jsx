import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
	const [itemText, setItemText] = useState("");
	const inputRef = useRef();

	const handleInputChange = (e) => setItemText(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!itemText) return inputRef.current.focus();

		onAddItem(itemText);
		setItemText("");
		return inputRef.current.focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add an item</h2>
			<input
				ref={inputRef}
				type="text"
				placeholder="Favourite book..."
				value={itemText}
				onChange={handleInputChange}
				autoFocus={true}
			/>
			<Button>Add to list</Button>
		</form>
	);
}
