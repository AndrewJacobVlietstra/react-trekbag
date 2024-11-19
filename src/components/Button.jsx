export default function Button({ onClick, children, secondary = false }) {
	return (
		<button
			onClick={onClick}
			className={`btn ${secondary && "btn--secondary"}`}
		>
			{children}
		</button>
	);
}
