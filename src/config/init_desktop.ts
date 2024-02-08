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

export const all_windows: IWindow[] = [
	{title: "who am i?", icon: who, isActive: false, openOrder: -1, windowElement: WhoAmI},
	{title: "toolbox", icon: toolbox, isActive: false, openOrder: -1, windowElement: ToolBox},
	{title: "projects", icon: projects, isActive: false, openOrder: -1, windowElement: Projects},
	{title: "say hi!", icon: mail, isActive: false, openOrder: -1, windowElement: SayHi},
	{title: "my resume", icon: pdf, isActive: false, openOrder: -1, windowElement: Resume},
]