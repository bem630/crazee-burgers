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
    

    const selectEditTab = () => { 
        setIsCollapsed(false); 
        setIsEditSelected(true) ;
        setIsAddSelected(false);
    }
    const selectAddtTab = () => {
        setIsCollapsed(false); 
        setIsEditSelected(false) ;
        setIsAddSelected(true);
    }

    return ( 
        <AdminTabsStyled>
            <Tab 
                Icon = {isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
                onClick = {() => { setIsCollapsed(!isCollapsed)}} 
                className={isCollapsed ? "is-active" : ""}
            />
            <Tab 
                label="Ajouter un produit" Icon = {<AiOutlinePlus />} 
                onClick = {selectAddtTab}
                className={isAddSelected ? "is-active" : ""}
            />
            <Tab 
                label="Modifier un produit" Icon = {<MdModeEditOutline />} 
                onClick = {selectEditTab} 
                className={isEditSelected ? "is-active" : ""}
            />
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