import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
                <h1>Bienvenue chez nous !</h1><br/>
                <h2>Connectez vous</h2>
            </div>
            <div>
                <input value={inputValues} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required />
                <button>Accédez à mon espace</button>
            </div>
        </LoginFormStyled>
     );
}
 
export default LoginForm;

const LoginFormStyled = styled.form`
  text-align: center;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;