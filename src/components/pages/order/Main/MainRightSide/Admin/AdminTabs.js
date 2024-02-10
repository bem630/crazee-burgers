import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getTabsConfig } from "./tabsConfig";
//import { useState } from "react";

const AdminTabs = () => {
    
    const {
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setcurrentTabSelected
    } = useContext(OrderContext);

     // comportements
  const selectTab = (tabSelected) => {
    setIsCollapsed(false) // tu m'ouvres le pannel
    setcurrentTabSelected(tabSelected)
  }

    const tabs = getTabsConfig();
    
    // affichage
    return ( 
        <AdminTabsStyled>
            <Tab 
                Icon= {isCollapsed ? <FiChevronUp/> : <FiChevronDown/>}
                onClick = { () => { setIsCollapsed(!isCollapsed)} }
                className={isCollapsed ? "is-active" : ""}
                label=""
                index="chevron"
            />
            {tabs.map((tab) =>(
                <Tab
                key={tab.index} 
                index={tab.index}
                label={tab.label}
                Icon = {tab.Icon}
                onClick = {() => selectTab(tab.index)} 
                className={currentTabSelected === tab.index ? "is-active" : ""}
            />
            ))}
        </AdminTabsStyled>
     );
}
 
export default AdminTabs;

const AdminTabsStyled = styled.div`
    display: flex;
    position: absolute;
    top: -43px;
    left: 5%;
    

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark} ;
        color: ${theme.colors.white};
    }
    button {
        margin-left: 1px;
    }
`;