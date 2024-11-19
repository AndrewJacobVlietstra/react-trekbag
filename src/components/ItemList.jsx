const defaultItems = [
	{
		name: "good mood",
		packed: true,
	},
	{
		name: "passport",
		packed: false,
	},
	{
		name: "phone charger",
		packed: false,
	},
];

export default function ItemList() {
	return (
		<ul>
			{defaultItems.map((item) => (
				<Item key={item.name} itemName={item.name} packed={item.packed} />
			))}
		</ul>
	);
}

function Item({ itemName, packed }) {
	return (
		<li className="item">
			<label>
				<input type="checkbox" checked={packed} />
				{itemName}
			</label>
		</li>
	);
}
