export default function ProgressBar({ progressPercentage }) {
	return (
		<div className="progress-bar" style={{ width: `${progressPercentage}%` }}>
			&nbsp;
		</div>
	);
}
