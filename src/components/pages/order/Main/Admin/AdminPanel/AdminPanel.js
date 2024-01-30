import styled from "styled-components";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "../getTabsConfig";
//import { MdYard } from "react-icons/md";


const AdminPanel = () => {
    const { currentTabSelected} = useContext(OrderContext);
    
    const tab = getTabsConfig(currentTabSelected);
    const tabSelected = getTabSelected(tab, currentTabSelected);
    
    return ( 
        <AdminPanelStyled>
            {currentTabSelected === tabSelected.index && tabSelected.Content}
            {/*{isAddSelected && "Ajouter un produit"}
            {isEditSelected && "Modifier un produit"}*/}
        </AdminPanelStyled>
     );
}
 
export default AdminPanel;

const AdminPanelStyled = styled.div`
    height: 240px;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid ${theme.colors.greyLight};
    box-sizing: border-box;
    padding: 30px 5%;
    margin: 0 10%;
    
`;