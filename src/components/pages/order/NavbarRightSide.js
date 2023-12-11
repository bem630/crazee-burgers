import styled from "styled-components";
import Profile from "./Profile";
const NavbarRightSide = () => {
    return ( 
        <NavbarRightSideStyled>
            {/*<div className="admin-button">Admin Button</div>*/}
            <Profile/>
        </NavbarRightSideStyled>
     );
}
 
export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
        
`;