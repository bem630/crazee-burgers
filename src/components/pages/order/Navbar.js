import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="leftside">
                <h2>Logo</h2>
            </div>
            <NavbarRightSide/>
        </NavbarStyled>
     );
}
 
export default Navbar;

const NavbarStyled = styled.nav`
    
        background: ${theme.colors.blue};
        height: 10vh;
        display: flex;
        justify-content: space-between;
        .leftside {
            background: ${theme.colors.success};
        }
  
`;