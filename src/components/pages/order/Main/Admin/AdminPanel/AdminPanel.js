import styled from "styled-components";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { getTabSelected, getTabsConfig } from "../getTabsConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
//import { MdYard } from "react-icons/md";


const AdminPanel = () => {
    const { currentTabSelected, productSelected} = useContext(OrderContext);
    const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
    const tab = getTabsConfig(hasAlreadyBeenClicked);
    const tabSelected = getTabSelected(tab, currentTabSelected);
    
    return ( 
        <AdminPanelStyled>
            {tabSelected.index && tabSelected.Content}
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