interface IWindow {
	title: string;
	icon: string;
	isActive: boolean;
	// dockElement: JSX.Element;
	windowElement: () => JSX.Element;
}

export default IWindow;