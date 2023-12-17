import styled from "styled-components";
import { theme } from "../../../../../theme";

const AdminPanel = () => {
    return ( 
        <AdminPanelStyled>AdminPanel</AdminPanelStyled>
     );
}
 
export default AdminPanel;

const AdminPanelStyled = styled.div`
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid ${theme.colors.greyLight};
    height: 250px;
        
`;