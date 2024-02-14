// import Draggable from "react-draggable";
// import GenericButton from "./GenericButton";
// import { useEffect, useState } from "react";

// const setDefaultPosition = () => {
// 	const maxX = window.innerWidth / 2
// 	const minX = window.innerWidth / 4
// 	const maxY = window.innerHeight / 2
// 	const minY = window.innerHeight / 10
// 	return {
// 		x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
// 		y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
// 	}
// }

// // const Window = (props: {title: string, icon: string, isActive: boolean, bodyElement: JSX.Element, closeWindow: Function, onWindowClick: Function}) => {

// // 	const [isMaximized, setIsMaximized] = useState(false)
// // 	const [isMinimized, setIsMinimized] = useState(false)
// // 	const [position, setPosition] = useState(setDefaultPosition());

// // 	useEffect(() => {
// // 		if (isMaximized) {
// // 			setPosition({ x: 0, y: 0 })
// // 		} else {
// // 			setPosition(setDefaultPosition())
// // 		}
// // 	}, [isMaximized])

// // 	return (
// // 		<Draggable bounds="#desktop" handle=".drag-handle"
// // 			defaultPosition={setDefaultPosition()} position={isMaximized ? position: undefined} >
// // 			<div className={`${isMinimized ? "hidden" : "absolute"} select-none min-h-44 min-w-44
// // 				${isMaximized ? "w-full h-full" : "w-fit h-fit"}
// // 				 border-2 border-solid border-black bg-text`}
// // 				onClick={(event) => {event.stopPropagation(); props.onWindowClick()}} >
// // 				<div className={`flex flex-col min-h-44 min-w-44  ${isMaximized ? "w-full h-full" : "w-fit h-fit"}
// // 				${props.isActive ? "border-2 border-t-white border-l-white border-r-black border-b-black" :
// // 				"border border-t-black border-l-black border-r-white border-b-white"}`}>
// // 					<div className={`drag-handle px-2 py-2 flex flex-row bg-dock gap-10
// // 						border-2 border-t-0 border-x-0 border-b-black items-center justify-between`}>
// // 						<div className={`flex flex-row justify-start gap-3`}>
// // 							<img src={props.icon} alt={props.title}
// // 								className={`h-6`} />
// // 							<p className={`capitalize font-pixelify-sans`}>{props.title}</p>
// // 						</div>
// // 						<div className={`flex flex-row justify-end gap-1`}>
// // 							<GenericButton text={`⎼`} isPrimary={false} functionallity={() => setIsMinimized(!isMaximized)} />
// // 							<GenericButton text={`⚿`} isPrimary={false} functionallity={() => setIsMaximized(!isMaximized)} />
// // 							<GenericButton text={`X`} isPrimary={false} functionallity={props.closeWindow} />
// // 						</div>
// // 					</div>
// // 					<div className={`px-3 py-2`}>
// // 						{props.bodyElement}
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</Draggable>
// // 	)
// // }

export default <></>;