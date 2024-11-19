import Item from "./Item";

export default function ItemList({
	items,
	handleToggleItem,
	handleDeleteItem,
}) {
	return (
		<ul>
			{items.map((item) => (
				<Item
					key={item.id}
					item={item}
					handleToggleItem={handleToggleItem}
					handleDeleteItem={handleDeleteItem}
				/>
			))}
		</ul>
	);
}
