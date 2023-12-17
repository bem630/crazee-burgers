import styled from "styled-components";
import { theme } from "../../../../../theme";

const Admin = () => {
    return ( 
        <AdminStyled className="admin">Admin</AdminStyled>
     );
}
 
export default Admin;

const AdminStyled = styled.div`
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid ${theme.colors.greyLight};
    height: 250px;
        
`;