export default function Item({ item, handleToggleItem, handleDeleteItem }) {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => handleToggleItem(item.id)}
					type="checkbox"
					checked={item.packed}
				/>
				{item.name}
			</label>

			<button onClick={() => handleDeleteItem(item.id)}>❌</button>
		</li>
	);
}
