import { useContext, useEffect, useState } from 'react';
import DesktopContext from '../config/DesktopContext';
import IWindow from '../types/window';

const DockElement = ({name, icon, isActive}:{name: string, icon: string, isActive: boolean}) => {
	return (
		<div className={`flex flex-row h-full border-solid border-black`}>
			<div className={`flex flex-row items-center justify-start gap-3 truncate ...
				w-14 sm:w-44 px-3 h-full border 
				${!isActive ? "border-t-white border-l-white border-r-black border-b-black" :
				"border-t-black border-l-black border-r-white border-b-white"}`}>
				<img src={icon} alt={name}
					className={`w-5`} />
				<p className={`hidden sm:block truncate ...`}>
					{name}
				</p>
			</div>
		</div>
	)
}


const Dock = () => {

	const [desktopContext,] = useContext(DesktopContext);
	const [dockElements, setDockElements] = useState<IWindow[]>([]);
	
	useEffect(() => {
		const sortedDesktopContext = [...desktopContext].sort((a, b) => a.openOrder - b.openOrder); 
		setDockElements(sortedDesktopContext)
	}, [desktopContext])

	return (
		<div className={`w-full h-12 bg-dock border-solid border-t-[.01rem]
		border-text shadow-topShadow flex flex-row items-end
		font-pixelify-sans text-sm text-background`}>
			{dockElements.map((window, index) =>  (
					<DockElement key={index} name={window.title} icon={window.icon} isActive={window.isActive} />
				)
			)}
		</div>
	)
}

export default Dock;