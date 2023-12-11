import styled from "styled-components";
import { theme } from "../../theme";

const Logo = ({className}) => {
    return ( 
        <LogoStyled className = {className} >
            <h1>CRAZEE</h1>
                <img src="/images/logo-orange.png" alt="" />
            <h1>BURGER</h1>
        </LogoStyled>
     );
}
 
export default Logo;

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    

  h1 {
        display: inline;
        text-align: center;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        line-height: 1em;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", cursive;
    }
  img {
        height: 60px;
        width: 80px;
        margin: 0 5px;
        object-fit: contain;
        object-position: center;
  }
`;