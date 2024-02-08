interface IWindow {
	title: string;
	icon: string;
	isActive: boolean;
	openOrder: number;
	// dockElement: JSX.Element;
	windowElement: () => JSX.Element;
}

export default IWindow;