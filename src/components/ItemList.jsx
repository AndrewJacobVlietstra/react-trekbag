import Item from "./Item";

export default function ItemList({ items }) {
	return (
		<ul>
			{items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</ul>
	);
}
