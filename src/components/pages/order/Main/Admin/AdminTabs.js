import styled from "styled-components";
import { theme } from "../../../../../theme";

const AdminTabs = () => {
    return ( 
        <AdminTabsStyled>AdminTabs</AdminTabsStyled>
     );
}
 
export default AdminTabs;

const AdminTabsStyled = styled.div`
    background-color: ${theme.colors.red};
        
`;