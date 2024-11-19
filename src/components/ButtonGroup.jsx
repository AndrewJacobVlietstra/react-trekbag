import { secondaryButtonText } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup({
	handleRemoveAllItems,
	handleResetToInitial,
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
}) {
	return (
		<section className="button-group">
			<Button onClick={handleMarkAllAsComplete} secondary={true}>
				{secondaryButtonText[0]}
			</Button>

			<Button onClick={handleMarkAllAsIncomplete} secondary={true}>
				{secondaryButtonText[1]}
			</Button>

			<Button onClick={handleResetToInitial} secondary={true}>
				{secondaryButtonText[2]}
			</Button>

			<Button onClick={handleRemoveAllItems} secondary={true}>
				{secondaryButtonText[3]}
			</Button>
		</section>
	);
}
