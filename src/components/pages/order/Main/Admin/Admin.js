import styled from "styled-components";
//import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";


const Admin = () => {
    
    return ( 
        <AdminStyled className="admin">
            <AdminTabs/>
            <AdminPanel/>
        </AdminStyled>
     );
}
 
export default Admin;

const AdminStyled = styled.div`
    
`;