import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/Button";
import { theme } from "../../../theme";
//import OrderPage from "../order/OrderPage";

const LoginForm = () => {
        // state
        const [ inputValues, setInputValue ] = useState("");
        const navigate = useNavigate();

        // comportements
        const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        navigate(`order/${inputValues}`);
        }
        const handleChange = (e) => {
        setInputValue(e.target.value);
        }
        
        

        // affichage (render)

        // création de formulaire 
        // soumission du formalaire
        //collecte de données
    return ( 
        <LoginFormStyled action="" onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1><hr/>
                <h2>Connectez vous</h2>
            </div>
            <div>
                <TextInput 
                  value={inputValues} 
                  onChange={handleChange} 
                  placeholder="Entrez votre prénom" 
                  required  
                  icon= {<BsPersonCircle className="icon" />}
                  className="input-login" 
                  version="normal" />
                <PrimaryButton 
                  iconChevron = {<FaChevronRight className="icon-btn"/>} 
                  label={"Accédez à mon espace"} />
            </div>
        </LoginFormStyled>
     );
}
 
export default LoginForm;

const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 40px ${theme.spacing.lg};
    //padding: 1.5rem 1rem;
    border-radius: ${theme.borderRadius.round};
    font-family: 'Amatic SC', cursive;

    hr {
      border: 1.5px solid ${theme.colors.loginLine};
      margin-bottom: ${theme.gridUnit * 5}px;
  }
  
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }
  
  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }
  
  .input-login {
    margin: 18px 0; // must be handled in Parent
  }

`;