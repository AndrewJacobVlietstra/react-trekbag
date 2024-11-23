import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import ItemsContextProvider from "../contexts/ItemsContextProvider";

export default function App() {
	return (
		<>
			<BackgroundHeading />
			<main>
				<ItemsContextProvider>
					<Header>
						<Logo />
						<Counter />
						<ProgressBar />
					</Header>

					<ItemList />

					<Sidebar>
						<AddItemForm />
						<ButtonGroup />
					</Sidebar>
				</ItemsContextProvider>
			</main>

			<Footer />
		</>
	);
}
