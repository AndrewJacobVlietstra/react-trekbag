import Counter from "./Counter";
import Logo from "./Logo";
import ProgressBar from "./ProgressBar";

export default function Header() {
	return (
		<header>
			<Logo />
			<Counter />
			<ProgressBar />
		</header>
	);
}
