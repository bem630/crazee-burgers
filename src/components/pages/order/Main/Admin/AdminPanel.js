import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

const AdminPanel = () => {
    const {isCollapsed,setIsCollapsed,isEditSelected, setIsEditSelected, isAddSelected, setIsAddSelected} = useContext(OrderContext);

    return ( 
        <AdminPanelStyled>
            {isAddSelected && "Ajouter un produit"}
            {isEditSelected && "Modifier un produit"}
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