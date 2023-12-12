import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo"

const Navbar = ({username}) => {
    return (
        <NavbarStyled>
            <Logo/>
            <NavbarRightSide username={username}/>
        </NavbarStyled>
     );
}
 
export default Navbar;

const NavbarStyled = styled.nav`
    
    background: ${theme.colors.white};
        height: 10vh;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        border-top-right-radius: ${theme.borderRadius.extraRound};
        border-top-left-radius: ${theme.borderRadius.extraRound};
        /*
        .leftside {
            background: ${theme.colors.white};
        }
        <div className="leftside">
            </div>*/
  
`;