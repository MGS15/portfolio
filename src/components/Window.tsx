import IWindow from "../types/window";
import Draggable from "react-draggable";
import DefaultWindow from "./WindowContent/DefaultWindow";
import GenericButton from "./GenericButton";
import { useEffect, useState } from "react";

const setDefaultPosition = () => {
	const maxX = window.innerWidth / 2
	const minX = window.innerWidth / 4
	const maxY = window.innerHeight / 2
	const minY = window.innerHeight / 10
	return {
		x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
		y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
	}
}

const Window = ({window_props}: {window_props: IWindow}) => {

	const [isMaximized, setIsMaximized] = useState(false)
	const [position, setPosition] = useState(setDefaultPosition());
	let defaultPosition = setDefaultPosition()

	useEffect(() => {
		if (isMaximized) {
			setPosition({ x: 0, y: 0 })
		} else {
			setPosition(setDefaultPosition())
		}
	}, [isMaximized])

	const testfunc = () => {
		console.log('test')
	}

	return (
		<Draggable bounds="#desktop" handle=".drag-handle"
			defaultPosition={defaultPosition} position={isMaximized ? position: undefined} >
			<div className={`absolute select-none min-h-44 min-w-44
				${isMaximized ? "w-full h-full top-0 left-0" : "w-fit h-fit"}
				 border-2 border-solid border-black bg-text`}>
				<div className={`flex flex-col min-h-44 min-w-44  ${isMaximized ? "w-full h-full" : "w-fit h-fit"}
				${window_props.isActive ? "border-2 border-t-white border-l-white border-r-black border-b-black" :
				"border border-t-black border-l-black border-r-white border-b-white"}`}>
					<div className={`drag-handle px-2 py-2 flex flex-row bg-dock gap-10
						border-2 border-t-0 border-x-0 border-b-black items-center justify-between`}>
						<div className={`flex flex-row justify-start gap-3`}>
							<img src={window_props.icon} alt={window_props.title}
								className={`h-6`} />
							<p className={`capitalize font-pixelify-sans`}>{window_props.title}</p>
						</div>
						<div className={`flex flex-row justify-end gap-1`}>
							<GenericButton text={`-`} isPrimary={false} functionallity={testfunc} params={null} />
							<GenericButton text={`□`} isPrimary={false} functionallity={setIsMaximized} params={!isMaximized} />
							<GenericButton text={`X`} isPrimary={false} functionallity={testfunc} params={null} />
						</div>
					</div>
					<div className={`px-3 py-2`}>
						<DefaultWindow />
					</div>
				</div>
			</div>
		</Draggable>
	)
}

export default Window;