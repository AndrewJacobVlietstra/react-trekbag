import { useItemsContext } from "../lib/hooks";

export default function Counter() {
	const { totalItems, totalPackedItems, totalProgress } = useItemsContext();

	return (
		<p>
			<b>{totalPackedItems()}</b> / {totalItems()} items packed (
			{totalProgress()}
			%)
		</p>
	);
}
