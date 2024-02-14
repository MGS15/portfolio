interface IWindow {
	title: string;
	icon: string;
	isActive: boolean;
	openOrder: number;
	// dockElement: JSX.Element;
	windowElement: (props: {
        title: string;
        icon: string;
        isActive: boolean;
        closeWindow: Function;
        onWindowClick: Function;
    }) => JSX.Element;
}

export default IWindow;