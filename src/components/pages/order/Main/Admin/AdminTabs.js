import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";
//import { useState } from "react";

const AdminTabs = () => {
    
    const {
        isCollapsed,
        setIsCollapsed,
        /*isEditSelected,
        setIsEditSelected,
        isAddSelected,
        setIsAddSelected,*/
        currentTabSelected,
        setcurrentTabSelected
    } = useContext(OrderContext);
    
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
    const tab = getTabsConfig(currentTabSelected);
    const selectTab = (tabSelected) => {
        setIsCollapsed(false); //ouvre moi le panel dans tous les cas
        /*if (tabSelected === "add") {
            setIsAddSelected(true);
            setIsEditSelected(false) ;
        }
        if (tabSelected === "edit") {
            setIsEditSelected(true) ;
            setIsAddSelected(false);
        }*/
        setcurrentTabSelected(tabSelected);//reactualise l'onglet selectionné
    }

    

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
            <Tab 
                Icon= {isCollapsed ? <FiChevronUp/> : <FiChevronDown/>}
                onClick = { () => { setIsCollapsed(!isCollapsed)} }
                className={isCollapsed ? "is-active" : ""}
            />
            {tab.map((tabs) =>{
                return <Tab 
                label={tabs.label}
                Icon = {tabs.Icon} 
                onClick = {() => { selectTab(tabs.index)}} 
                className={currentTabSelected === tabs.index ? "is-active" : ""}
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