import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

import ItemsContextProvider from "../contexts/ItemsContextProvider";

export default function App() {
	return (
		<>
			<BackgroundHeading />

			<main>
				<ItemsContextProvider>
					<Header />
					<ItemList />
					<Sidebar />
				</ItemsContextProvider>
			</main>

			<Footer />
		</>
	);
}
