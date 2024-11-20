import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalItems, totalPackedItems }) {
	return (
		<header>
			<Logo />
			<Counter totalItems={totalItems} totalPackedItems={totalPackedItems} />
		</header>
	);
}
