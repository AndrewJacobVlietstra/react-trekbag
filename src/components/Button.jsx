export default function Button({ children, secondary = false }) {
	return (
		<button className={`btn ${secondary && "btn--secondary"}`}>
			{children}
		</button>
	);
}
