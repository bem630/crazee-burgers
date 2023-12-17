import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";

const AdminTabs = () => {
    return ( 
        <AdminTabsStyled>
            <Tab Icon = {<FiChevronDown className="btnChevronDown"/>} />
        </AdminTabsStyled>
     );
}
 
export default AdminTabs;

const AdminTabsStyled = styled.div`
    background-color: ${theme.colors.red};
    display: flex;
    padding: 0 20px;
`;