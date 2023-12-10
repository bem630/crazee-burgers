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
  background-color: yellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;