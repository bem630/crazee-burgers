import styled from "styled-components";
import OrderContext from "../../../../../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"
import { theme } from "../../../../../../../theme"
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "../tabsConfig";



const AdminPanel = () => {
    const { currentTabSelected, productSelected} = useContext(OrderContext);

    const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
    const tabs = getTabsConfig(hasAlreadyBeenClicked);
    const tabSelected = getTabSelected(tabs, currentTabSelected);
    
    return ( 
        <AdminPanelStyled>
            {tabSelected && tabSelected.Content}
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
    
`;