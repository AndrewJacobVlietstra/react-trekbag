export default function ProgressBar({ totalProgress }) {
	return (
		<div className="progress-bar" style={{ width: `${totalProgress()}%` }}>
			&nbsp;
		</div>
	);
}
