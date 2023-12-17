import styled from "styled-components";
//import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";



const Admin = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return ( 
        <AdminStyled>
            <AdminTabs isCollapsed ={isCollapsed} setIsCollapsed= {setIsCollapsed} />
            {!isCollapsed && <AdminPanel/>}
        </AdminStyled>
     );
}
 
export default Admin;

const AdminStyled = styled.div`
    
`;