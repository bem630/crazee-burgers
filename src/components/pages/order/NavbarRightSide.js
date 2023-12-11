import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
const NavbarRightSide = ({username}) => {
    return ( 
        <NavbarRightSideStyled>
            <h1>Bonjour {username} </h1>
            <Link to={'/'}><button>Deconnexion</button></Link>
        </NavbarRightSideStyled>
     );
}
 
export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
            background: ${theme.colors.success};
        
`;