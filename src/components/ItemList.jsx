import EmptyView from "./EmptyView";
import Item from "./Item";

export default function ItemList({
	items,
	handleToggleItem,
	handleDeleteItem,
}) {
	return (
		<ul className="item-list">
			{items.length === 0 ? <EmptyView /> : null}

			{items.map((item) => (
				<Item
					key={item.id}
					item={item}
					onToggleItem={handleToggleItem}
					onDeleteItem={handleDeleteItem}
				/>
			))}
		</ul>
	);
}
