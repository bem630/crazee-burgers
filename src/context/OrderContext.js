import {createContext} from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    isEditSelected: false,
    isAddSelected: false,
    setIsAddSelected: () => {},
    currentTabSelected: () => {},
    setcurrentTabSelected: () => {},
})