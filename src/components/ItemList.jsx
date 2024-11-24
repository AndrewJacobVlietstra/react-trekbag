import EmptyView from "./EmptyView";
import Item from "./Item";
import Select from "react-select";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

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

export default function ItemList() {
	const items = useItemsStore((state) => state.items);
	const toggleItem = useItemsStore((state) => state.toggleItem);
	const deleteItem = useItemsStore((state) => state.deleteItem);
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
						defaultValue={sortingOptions.at(0)}
						options={sortingOptions}
					/>
				</section>
			) : null}

			{sortedItems.map((item) => (
				<Item
					key={item.id}
					item={item}
					onToggleItem={toggleItem}
					onDeleteItem={deleteItem}
				/>
			))}
		</ul>
	);
}
