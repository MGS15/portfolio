import { useContext, useEffect, useState } from "react";
import DesktopContext from "../config/DesktopContext";
import { all_icons, all_windows } from "../config/init_desktop";
import IWindow from "../types/window";
import Window from "./Window";

const Icon = ({name, icon, isActive, onIconClick, onIconDoubleClick}: {name: string, icon: string, isActive: boolean, onIconClick: Function, onIconDoubleClick: Function}) => {

	const handleOneClick = (event: any) => {
		event.stopPropagation();
		onIconClick(name);
	}
  
	const handleDoubleClick = (event: any) => {
		event.stopPropagation();
		onIconDoubleClick(name);
	}
  
	return (
		<div className={`w-28 h-28 flex flex-col items-center justify-center
		font-pixelify-sans text-text z-2 gap-3 rounded-lg box-content select-none
		${isActive ? "border-2 bg-[rgba(255,2555,255,.1)]" : ""}`}
		onClick={handleOneClick}
		onDoubleClick={handleDoubleClick}>
			<img src={icon} alt={name} />
			<p className={`w-full text-lg text-center select-none capitalize px-2`}>
				{name}
			</p>
		</div>
	)
}

const Desktop = () => {
	const [activeFile, setActiveFile] = useState("");
	const desktopContext = useContext(DesktopContext);
	const [desktop, setDesktop] = useState<IWindow[]>(desktopContext);

	const handleFileClick = (fileName: string) => {
		setActiveFile(fileName);
	}
	
	const handleDoubleClick = (fileName: string) => {
		const window = all_windows.find(window => window.title === fileName);
		if (!window) return;
		setDesktop([...desktop, window]);
	}
	
		useEffect(() => {
			const handleClickOutside = () => {
				setActiveFile("");
			}
			window.addEventListener('click', handleClickOutside);
			return () => window.removeEventListener('click', handleClickOutside)
		}, [activeFile, desktop]);
	  
  
	return (
		<div id="desktop" className={`bg-wallpaper relative bg-center bg-cover bg-no-repeat
			flex flex-col flex-1 gap-5 overflow-hidden`}>
			{
				all_icons.map(
					(icon, index) =>  <Icon key={index} name={icon.name} icon={icon.icon} isActive={activeFile === icon.name}
						onIconClick={handleFileClick} onIconDoubleClick={handleDoubleClick} />
				)
			}
			{
				desktop.map((window, index) => {
					window.isActive = index === desktop.length - 1
					return <Window key={index} title={window.title} icon={window.icon}
						isActive={window.isActive} windowElement={window.windowElement()} />
				})
			}
			
	  	</div>
	)
}


export default Desktop;