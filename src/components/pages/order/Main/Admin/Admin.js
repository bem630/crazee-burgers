import styled from "styled-components";
//import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";



const Admin = () => {
    const {isCollapsed} = useContext(OrderContext);

    
    return ( 
        <AdminStyled>
            <AdminTabs />
            {!isCollapsed && <AdminPanel />}
        </AdminStyled>
     );
}
 
export default Admin;

const AdminStyled = styled.div`
    
`;