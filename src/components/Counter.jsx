export default function Counter({
	totalItems,
	totalPackedItems,
	totalProgress,
}) {
	return (
		<p>
			<b>{totalPackedItems()}</b> / {totalItems()} items packed (
			{totalProgress()}
			%)
		</p>
	);
}
