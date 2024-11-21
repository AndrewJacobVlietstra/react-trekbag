import Counter from "./Counter";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

export default function Header({ totalItems, totalPackedItems }) {
	let progressPercentage = (totalPackedItems() / totalItems()) * 100;
	if (isNaN(progressPercentage)) {
		progressPercentage = 0;
	}

	return (
		<header>
			<Logo />
			<Counter totalItems={totalItems} totalPackedItems={totalPackedItems} />
			<ProgressBar progressPercentage={progressPercentage} />
		</header>
	);
}
