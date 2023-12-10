import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";


const LoginPage = () => {
    
    return ( 
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
     );
}
 
export default LoginPage;

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ::before {
    content: "";
    background: url('/images/burger-background.jpg') rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    position: absolute;
    background-blend-mode: darken;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;