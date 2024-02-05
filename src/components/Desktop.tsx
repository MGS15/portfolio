import { useEffect, useState } from "react";
import projects from "../assets/projects.png"
import mail from "../assets/mail.png"
import toolbox from "../assets/toolbox.png"
import pdf from "../assets/pdf.png"
import who from "../assets/who.png"

const File = ({name, icon, isActive, onFileClick}: {name: string, icon: string, isActive: boolean, onFileClick: Function}) => {

	const handleOneClick = (event: any) => {
		event.stopPropagation();
	  	onFileClick(name);
	}
  
	const handleDoubleClick = () => {}
  
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

	useEffect(() => {
		const handleClickOutside = () => {
			setActiveFile("");
		}
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside)
	}, [activeFile]);
  
	const handleFileClick = (fileName: string) => {
	  setActiveFile(fileName);
	}
  
	return (
		<div id="desktop" className={`bg-wallpaper bg-center bg-cover bg-no-repeat
		flex flex-col flex-1 gap-5 px-4 py-6`}>
			<File 
				name={"Who am I?"} 
				icon={who} 
				isActive={"Who am I?" === activeFile} 
				onFileClick={handleFileClick}
			/>
			<File 
				name={"my toolbox"} 
				icon={toolbox} 
				isActive={"my toolbox" === activeFile} 
				onFileClick={handleFileClick}
			/>
			<File 
				name={"projects"} 
				icon={projects} 
				isActive={"projects" === activeFile} 
				onFileClick={handleFileClick}
			/>
			<File 
				name={"say hi!"} 
				icon={mail} 
				isActive={"say hi!" === activeFile} 
				onFileClick={handleFileClick}
			/>
			<File 
				name={"my resume"} 
				icon={pdf} 
				isActive={"my resume" === activeFile} 
				onFileClick={handleFileClick}
			/>
	  	</div>
	)
}


export default Desktop;