import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
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
                <div className="input-with-icon">
                    <BsPersonCircle className="icon" />
                    <input value={inputValues} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required />
                </div>
                <button>Accédez à mon espace <FaChevronRight className="icon-btn"/> </button>
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
    .input-with-icon {
        display: flex;
        flex-direction: row;
        padding: 18px 24px;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        margin: 18px 0;
    }
    .icon {
    margin-right: 8px;
    font-size: 15px;
    color: #93a2b1;
  }
    input {
        outline-color: blue;
        border: none;
        color: #17161a;
        font-size: 15px;
        width: 100%;
    }
    &::placeholder {
    background-color: white;
    color: lightgrey;
  }
  button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 15px;
    padding: 18px 24px;
    font-weight: 800;
    line-height: 1;
    background-color: #ff9f1b;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: all 200ms ease-out;
    width: 100%;
  &:hover {
    background-color: #fff;
    color: #ff9f1b;
    transition: all 200ms ease-out;
    border: 1px solid #ff9f1b;
  }
    }
    .icon-btn {
    font-size: 15px;
    margin-left: 8px;
  }
  }

`;