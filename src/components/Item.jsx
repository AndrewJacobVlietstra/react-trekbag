export default function Item({ item }) {
	return (
		<li className="item">
			<label>
				<input type="checkbox" checked={item.packed} />
				{item.name}
			</label>

			<button>❌</button>
		</li>
	);
}
