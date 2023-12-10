import styled from "styled-components";

const Logo = () => {
    return ( 
        <LogoStyled>
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
    transform: scale(2.5);

  h1 {
        display: inline;
        text-align: center;
        color: #ffa01b;
        font-size: 36px;
        font-weight: 700;
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