import pdf from '../assets/pdf.png';

const DockElement = ({name, icon, isActive}:{name: string, icon: string, isActive: boolean}) => {
	return (
		<div className={`flex flex-row h-full border-solid border-black`}>
			<div className={`flex flex-row items-center justify-start gap-3 truncate ...
				w-14 sm:w-44 px-3 h-full border 
				${isActive ? "border-t-white border-l-white border-r-black border-b-black" :
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
	return (
		<div className={`w-full h-12 bg-dock border-solid border-t-[.01rem]
		border-text shadow-topShadow flex flex-row items-end
		font-pixelify-sans text-sm text-background`}>
			<DockElement isActive={true} icon={pdf} name={`resume`} />
			<DockElement isActive={false} icon={pdf} name={`resume`} />
			<DockElement isActive={true} icon={pdf} name={`resusdfsdfsdfsdfadfdsfsdfsdfme`} />
		</div>
	)
}

export default Dock;