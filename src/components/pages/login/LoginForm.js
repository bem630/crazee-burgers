import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
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
            <div className="form-gauche">
                <TextInput value={inputValues} onChange={handleChange} placeholder="Entrez votre prénom" required  icon= {<BsPersonCircle className="icon" />} />
                <PrimaryButton iconChevron = {<FaChevronRight className="icon-btn"/>} label={"Accédez à mon espace"} />
            </div>
        </LoginFormStyled>
     );
}
 
export default LoginForm;

const LoginFormStyled = styled.form`
    font-family: 'Amatic SC', cursive;
    border-radius: ${theme.borderRadius.round};
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
  
  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
  }
  hr {
    border: 1.5px solid #f56a2c;
    //width: 100%;
    margin-bottom: 40px;
  }
  h2 {
    color: ${theme.colors.white};
    font-size: 36px;
    margin: 20px 10px;
  }
  .form-gauche {
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
  }

`;