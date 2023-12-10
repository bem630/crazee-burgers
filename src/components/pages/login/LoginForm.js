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
                <h1>Bienvenue chez nous !</h1><hr/>
                <h2>Connectez vous</h2>
            </div>
            <div className="form-gauche">
                <input value={inputValues} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required />
                <button>Accédez à mon espace</button>
            </div>
        </LoginFormStyled>
     );
}
 
export default LoginForm;

const LoginFormStyled = styled.form`
    font-family: 'Amatic SC', cursive;
    border-radius: 5px;
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    background-color: green;
    margin: 0 auto;
    padding: 1.5rem 1rem;
  /*
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  */
  h1 {
    color: white;
    font-size: 48px;
  }
  hr {
    border: 1.5px solid #f56a2c;
    //width: 100%;
    margin-bottom: 40px;
  }
  h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px;
  }
  .form-gauche {
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    input {
        margin-bottom: 10px;
        padding: 8px 20px;
    }
    button {
        margin-bottom: 10px;
        padding: 8px 20px;
        cursor: pointer;
    }
  }

`;