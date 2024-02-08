import { createContext } from "react";
import IWindow from "../types/window";

const desktopElements: IWindow[] = []

const DesktopContext = createContext<[IWindow[], any]>([desktopElements, null])

export default DesktopContext;