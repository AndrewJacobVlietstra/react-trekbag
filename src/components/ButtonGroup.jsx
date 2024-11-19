import { secondaryButtonText } from "../lib/constants";
import Button from "./Button";

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
