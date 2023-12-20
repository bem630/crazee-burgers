import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
//import { useState } from "react";

const AdminTabs = () => {
    
    const {isCollapsed,setIsCollapsed,isEditSelected, setIsEditSelected, isAddSelected, setIsAddSelected} = useContext(OrderContext);
    
/*
    const selectEditTab = () => { 
        setIsCollapsed(false); 
        setIsEditSelected(true) ;
        setIsAddSelected(false);
    }
    const selectAddtTab = () => {
        setIsCollapsed(false); 
        setIsEditSelected(false) ;
        setIsAddSelected(true);
    }*/

    const selectTab = (tabSelected) => {
        setIsCollapsed(false); 
        if (tabSelected === "add") {
            setIsAddSelected(true);
            setIsEditSelected(false) ;
        }
        if (tabSelected === "edit") {
            setIsEditSelected(true) ;
            setIsAddSelected(false);
        }
    }

    const tabsConfig = [
        {
            label: "",
            Icon: isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
            onClick: () => { setIsCollapsed(!isCollapsed)},
            className: isCollapsed ? "is-active" : "",
        },
        {
            label: "Ajouter un produit",
            Icon: <AiOutlinePlus />,
            onClick: ()=> selectTab("add"),
            className: isAddSelected ? "is-active" : "",
        },
        {
            label: "Modifier un produit",
            Icon: <MdModeEditOutline />,
            onClick: ()=> selectTab("edit"),
            className: isEditSelected ? "is-active" : "",
        }
    ]

    return ( 
        <AdminTabsStyled>
           {/* <Tab 
                label=""
                Icon = {} 
                onClick = {} 
                className={}
            />
            <Tab 
                label="Ajouter un produit" Icon = {<AiOutlinePlus />} 
                onClick = { ()=> selectTab("add") }
                className={isAddSelected ? "is-active" : ""}
            />
            <Tab 
                label="Modifier un produit" Icon = {<MdModeEditOutline />} 
                onClick = { ()=> selectTab("edit")} 
                className={isEditSelected ? "is-active" : ""}
            />*/}
            {tabsConfig.map((tabs) =>{
                return <Tab 
                label={tabs.label}
                Icon = {tabs.Icon} 
                onClick = {tabs.onClick} 
                className={tabs.className}
            />
            })}
        </AdminTabsStyled>
     );
}
 
export default AdminTabs;

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark} ;
        color: ${theme.colors.white};
    }
    button {
        margin-left: 1px;
    }
`;