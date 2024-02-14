import Draggable from "react-draggable";
import GenericButton from "../GenericButton";
import { useEffect, useState } from "react";

const SayHiBody = () => {
  return <div>Say Hi!</div>;
}

const SayHi = (props: {title: string, icon: string, isActive: boolean, winPosition: {x: number, y: number}, closeWindow: Function, onWindowClick: Function}) => {

	const [isMaximized, setIsMaximized] = useState(false)
	const [isMinimized, setIsMinimized] = useState(false)
	const [position, setPosition] = useState(props.winPosition);
	const [latestPosition, setLatestPosition] = useState(props.winPosition);

	useEffect(() => {
		if (isMaximized) {
			setPosition({ x: 0, y: 0 })
		} else {
			setPosition(props.winPosition)
		}
	}, [isMaximized])

	useEffect(() => {
		setLatestPosition(position)
	}, [latestPosition, position])

	return (
		<Draggable bounds="#desktop" handle=".drag-handle"
			onStop={(_event, data) => setPosition({ x: data.x, y: data.y })}
			defaultPosition={latestPosition} position={isMaximized ? position: undefined} >
			<div className={`${isMinimized ? "hidden" : "absolute"} select-none min-h-44 min-w-44
				${isMaximized ? "w-full h-full" : "w-fit h-fit"}
				 border-2 border-solid border-black bg-text`}
				onClick={(event) => {event.stopPropagation(); props.onWindowClick()}} >
				<div className={`flex flex-col min-h-44 min-w-44  ${isMaximized ? "w-full h-full" : "w-fit h-fit"}
				${props.isActive ? "border-2 border-t-white border-l-white border-r-black border-b-black" :
				"border border-t-black border-l-black border-r-white border-b-white"}`}>
					<div className={`drag-handle px-2 py-2 flex flex-row bg-dock gap-10
						border-2 border-t-0 border-x-0 border-b-black items-center justify-between`}>
						<div className={`flex flex-row justify-start gap-3`}>
							<img src={props.icon} alt={props.title}
								className={`h-6`} />
							<p className={`capitalize font-pixelify-sans`}>{props.title}</p>
						</div>
						<div className={`flex flex-row justify-end gap-1`}>
							<GenericButton text={`⎼`} isPrimary={false} functionallity={() => setIsMinimized(!isMaximized)} />
							<GenericButton text={`⚿`} isPrimary={false} functionallity={() => setIsMaximized(!isMaximized)} />
							<GenericButton text={`X`} isPrimary={false} functionallity={props.closeWindow} />
						</div>
					</div>
					<div className={`px-3 py-2`}>
						<SayHiBody />
					</div>
				</div>
			</div>
		</Draggable>
	)
}

export default SayHi;