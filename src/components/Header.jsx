import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

export default function Header() {
	const items = useItemsStore((state) => state.items);

	const totalItems = () => items.length;

	const totalPackedItems = () => {
		const packedItems = items.filter((item) => item.packed).length;
		return packedItems;
	};

	const totalProgress = () => {
		let progressPercentage = Math.floor(
			(totalPackedItems() / totalItems()) * 100
		);
		if (isNaN(progressPercentage)) {
			return (progressPercentage = 0);
		}

		return progressPercentage;
	};

	return (
		<header>
			<Logo />
			<Counter
				totalItems={totalItems}
				totalPackedItems={totalPackedItems}
				totalProgress={totalProgress}
			/>
			<ProgressBar totalProgress={totalProgress} />
		</header>
	);
}
