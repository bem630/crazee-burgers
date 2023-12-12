import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";


const LoginPage = () => {
    
    return ( 
        <LoginPageStyled>
            <Logo className = {"logo-login-page"} />
            <LoginForm/>
        </LoginPageStyled>
     );
}
 
export default LoginPage;

const LoginPageStyled = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("images/burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    .logo-login-page {
      transform: scale(2.5);
    }

  /*height: 100vh;
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("images/burger-background.jpg");
  }*/
`;