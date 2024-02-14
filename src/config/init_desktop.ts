import projects from "../assets/projects.png"
import mail from "../assets/mail.png"
import toolbox from "../assets/toolbox.png"
import pdf from "../assets/pdf.png"
import who from "../assets/who.png"
import IWindow from "../types/window"
import WhoAmI from "../components/WindowContent/WhoAmI"
import ToolBox from "../components/WindowContent/ToolBox"
import Projects from "../components/WindowContent/Projects"
import SayHi from "../components/WindowContent/SayHi"
import Resume from "../components/WindowContent/Resume"

export const all_icons = [
	{ name: "who am i?", icon: who },
	{ name: "toolbox", icon: toolbox },
	{ name: "projects", icon: projects },
	{ name: "say hi!", icon: mail },
	{ name: "my resume", icon: pdf}
]

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

const POSIONS: {x:number, y: number}[] = []
all_icons.forEach(() => POSIONS.push(setDefaultPosition()))

export const all_windows: IWindow[] = [
	{
		title: "who am i?", icon: who, isActive: false, openOrder: -1, windowElement: (props) => WhoAmI({
			title: "who am i?", icon: who, isActive: props.isActive, winPosition: POSIONS[0], closeWindow: props.closeWindow, onWindowClick: props.onWindowClick
		})
	},
	{
		title: "toolbox", icon: toolbox, isActive: false, openOrder: -1, windowElement: (props) => ToolBox({
			title: "toolbox", icon: toolbox, isActive: props.isActive, winPosition: POSIONS[1], closeWindow: props.closeWindow, onWindowClick: props.onWindowClick
		})
	},
	{
		title: "projects", icon: projects, isActive: false, openOrder: -1, windowElement: (props) => Projects({
			title: "projects", icon: projects, isActive: props.isActive, winPosition: POSIONS[2], closeWindow: props.closeWindow, onWindowClick: props.onWindowClick,
		})
	},
	{
		title: "say hi!", icon: mail, isActive: false, openOrder: -1, windowElement: (props) => SayHi({
			title: "say hi!", icon: mail, isActive: props.isActive, winPosition: POSIONS[3], closeWindow: props.closeWindow, onWindowClick: props.onWindowClick
		})
	},
	{
		title: "my resume", icon: pdf, isActive: false, openOrder: -1, windowElement: (props) => Resume({
			title: "my resume", icon: pdf, isActive: false, winPosition: POSIONS[4], closeWindow: props.closeWindow, onWindowClick: props.onWindowClick
		})
	},
]