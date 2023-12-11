import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

const Navbar = ({username}) => {
    return (
        <NavbarStyled>
            <div className="leftside">
                <h2>Logo</h2>
            </div>
            <div className="rightside">
                <h1>Bonjour {username} </h1>
                <Link to={'/'}><button>Deconnexion</button></Link>
            </div>
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
        .rightside {
            background: ${theme.colors.success};
        }
  
`;