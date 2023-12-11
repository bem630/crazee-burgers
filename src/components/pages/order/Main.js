import styled from "styled-components";
import { theme } from "../../../theme";

const Main = () => {
    return ( 
        <MainStyled>Main</MainStyled>
     );
}
 
export default Main;

const MainStyled = styled.div`
        background: ${theme.colors.background_white};
        //height: calc( 95vh - 10vh)
        flex: 1;
`;