const GenericButton = (props: { text: string, isPrimary: boolean, functionallity: any, params: any }) => {
	return (
		<div className="border border-solid border-black bg-dock">
			<button onClick={() => props.functionallity ? props.functionallity(props.params) : null}
				className={`px-2 font-pixelify-sans ${props.isPrimary ? "text-xl" : "text-base"}
				border border-solid border-l-white border-t-white border-b-black border-r-black
				active:border-l-black active:border-t-black active:border-b-white active:border-r-white`}>
				{props.text}
			</button>
		</div>
	)
}

export default GenericButton;