import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
//import ToggleButton from "../../../reusable-ui/ToggleButton"
const NavbarRightSide = ({ username }) => {
    return ( 
        <NavbarRightSideStyled>
            <ToggleButton labelIfUnchecked="activer le mode admin" labelIfChecked="desactiver le mode admin"  />
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