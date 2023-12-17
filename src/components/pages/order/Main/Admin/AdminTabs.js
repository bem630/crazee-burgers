import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const AdminTabs = ({isCollapsed,setIsCollapsed}) => {

    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
    }
    

    return ( 
        <AdminTabsStyled>
            <Tab label="" Icon = {isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} 
            onClick = {handleClick} 
            className={isCollapsed ? "is-active" : ""}
            />
            <Tab label1="Ajouter un produit" Icon = {<AiOutlinePlus />} 
            onClick = {handleClick} 
            className={isCollapsed ? "is-active" : ""}
            />
            <Tab label2="Modifier un produit" Icon = {<MdModeEditOutline />} 
            onClick = {handleClick} 
            className={isCollapsed ? "is-active" : ""}
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