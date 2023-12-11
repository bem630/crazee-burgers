import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo"

const Navbar = () => {
    return (
        <NavbarStyled>
            <Logo/>
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
        padding: 0 20px;
        /*
        .leftside {
            background: ${theme.colors.success};
        }
        <div className="leftside">
            </div>*/
  
`;