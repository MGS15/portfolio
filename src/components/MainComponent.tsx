import { useState } from "react";
import DesktopContext from "../config/DesktopContext";
import Desktop from "./Desktop";
import Dock from "./Dock";
import Header from "./Header";
import IWindow from "../types/window";

const MainComponent = () => {

	const [desktopContext, setDesktopContext] = useState<IWindow[]>([]);

	return (
		<div className={`flex flex-col w-full h-full`}>
			<Header />
			<DesktopContext.Provider value={[desktopContext, setDesktopContext]}>
				<Desktop />
				<Dock />
			</DesktopContext.Provider>
		</div>
	);
}

export default MainComponent;