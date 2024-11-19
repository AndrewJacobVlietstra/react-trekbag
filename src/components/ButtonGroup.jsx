import Button from "./Button";

const secondaryButtonText = [
	"Mark all as complete",
	"Mark all as incomplete",
	"Reset to initial",
	"Remove all items",
];

export default function ButtonGroup() {
	return (
		<section className="button-group">
			{secondaryButtonText.map((buttonText) => (
				<Button key={buttonText} secondary={true}>
					{buttonText}
				</Button>
			))}
		</section>
	);
}
