import EmptyView from "./EmptyView";
import Item from "./Item";
import Select from "react-select";
import { useMemo, useState } from "react";

const sortingOptions = [
	{
		label: "Sort by default",
		value: "default",
	},
	{
		label: "Sort by packed",
		value: "packed",
	},
	{
		label: "Sort by unpacked",
		value: "unpacked",
	},
];

export default function ItemList({
	items,
	handleToggleItem,
	handleDeleteItem,
}) {
	const [sortBy, setSortBy] = useState("default");

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === "packed") {
					return b.packed - a.packed;
				}

				if (sortBy === "unpacked") {
					return a.packed - b.packed;
				}

				return;
			}),
		[items, sortBy]
	);

	return (
		<ul className="item-list">
			{items.length === 0 ? <EmptyView /> : null}

			{items.length > 0 ? (
				<section className="sorting">
					<Select
						onChange={(option) => setSortBy(option.value)}
						defaultValue={sortingOptions[0]}
						options={sortingOptions}
					/>
				</section>
			) : null}

			{sortedItems.map((item) => (
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
