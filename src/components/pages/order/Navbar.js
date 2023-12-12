import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo"
import { refreshPage } from "../../../utils/window";

const Navbar = ({username}) => {
    return (
        <NavbarStyled>
            <Logo className={"logo-order-page"} onClick={refreshPage}/>
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
        .logo-order-page {
            cursor: pointer;
        }
        /*
        .leftside {
            background: ${theme.colors.white};
        }
        <div className="leftside">
            </div>*/
  
`;