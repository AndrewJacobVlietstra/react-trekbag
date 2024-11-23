import { useItemsContext } from "../lib/hooks";

export default function ProgressBar() {
	const { totalProgress } = useItemsContext();

	return (
		<div className="progress-bar" style={{ width: `${totalProgress()}%` }}>
			&nbsp;
		</div>
	);
}
