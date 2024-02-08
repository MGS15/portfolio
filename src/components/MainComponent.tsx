import DesktopContext from "../config/DesktopContext";
import Desktop from "./Desktop";
import Dock from "./Dock";
import Header from "./Header";

const MainComponent = () => {
	return (
		<div className={`flex flex-col w-full h-full`}>
			<Header />
			<DesktopContext.Provider value={[]}>
				<Desktop />
			</DesktopContext.Provider>
			<Dock />
		</div>
	);
}

export default MainComponent;