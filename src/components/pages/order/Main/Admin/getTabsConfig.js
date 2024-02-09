import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
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
        Content: <AddForm/>,
       // onClick: ()=> selectTab("add"),
        //className: currentTabSelected === "add" ? "is-active" : "",
       // className: isAddSelected ? "is-active" : "",
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        Content: hasAlreadyBeenClicked ? <EditForm/> : <HintMessage />,
       //onClick: ()=> selectTab("edit"),
        //className: currentTabSelected === "edit" ? "is-active" : "",
        //className: isEditSelected ? "is-active" : "",
    },
];

export const getTabSelected = (tab, currentTabSelected) => 
tab.find((tabs)=> tabs.index === currentTabSelected )