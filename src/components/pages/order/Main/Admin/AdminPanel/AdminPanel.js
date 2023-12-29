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
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid ${theme.colors.greyLight};
    height: 250px;
        
`;