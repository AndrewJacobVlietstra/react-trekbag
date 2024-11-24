import { useRef, useState } from "react";
import Button from "./Button";
import { MAXIMUM_ITEM_TEXT_LENGTH } from "../lib/constants";
import { useItemsStore } from "../stores/itemsStore";

export default function AddItemForm() {
	const addItem = useItemsStore((state) => state.addItem);
	const [itemText, setItemText] = useState("");
	const inputRef = useRef();

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue.length > MAXIMUM_ITEM_TEXT_LENGTH) {
			console.error(
				`Item text should not exceed ${MAXIMUM_ITEM_TEXT_LENGTH} characters!`
			);
			return;
		}
		return setItemText(inputValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!itemText) return inputRef.current.focus();

		addItem(itemText);
		setItemText("");
		return inputRef.current.focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			{itemText.length >= MAXIMUM_ITEM_TEXT_LENGTH ? (
				<h2 className="warning">Maximum Text Limit Reached!</h2>
			) : (
				<h2>Add An Item</h2>
			)}

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
