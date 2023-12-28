import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BiSun } from "react-icons/bi"

export const getTabsConfig = (currentTabSelected) => [
    /*{
        index: "chevronUpDown",
        label: "",
        Icon: isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
        onClick: () => { setIsCollapsed(!isCollapsed)},
        className: isCollapsed ? "is-active" : "",
    },*/
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
       // onClick: ()=> selectTab("add"),
        //className: currentTabSelected === "add" ? "is-active" : "",
       // className: isAddSelected ? "is-active" : "",
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
       //onClick: ()=> selectTab("edit"),
        //className: currentTabSelected === "edit" ? "is-active" : "",
        //className: isEditSelected ? "is-active" : "",
    },
    {
        index: "theme",
        label: "Changer un produit",
        Icon: <BiSun />,
    }
];

export const getTabSelected = (tab, currentTabSelected) => 
tab.find((tabs)=> tabs.index === currentTabSelected )