import { createContext } from "react";
import IWindow from "../types/window";

const desktopElements: IWindow[] = []

const DesktopContext = createContext(desktopElements)

export default DesktopContext;