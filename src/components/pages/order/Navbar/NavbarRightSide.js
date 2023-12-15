import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton"
const NavbarRightSide = ({ username }) => {
    return ( 
        <NavbarRightSideStyled>
            <ToggleButton  />
            <Profile username={username} />
        </NavbarRightSideStyled>
     );
}
 
export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
        
`;