import { useState } from "react";
import { Link } from "react-router-dom";
//import OrderPage from "../order/OrderPage";

const LoginForm = () => {
        // state
        const [ inputValues, setInputValue ] = useState("");

        // comportements
        const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        }
        const handleChange = (e) => {
        setInputValue(e.target.value);
        }
        
        

        // affichage (render)

        // création de formulaire 
        // soumission du formalaire
        //collecte de données
    return ( 
        <form action="" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1><br/>
            <h2>Connectez vous</h2>
            <input value={inputValues} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required />
            <button>Accédez à votre espace</button>
        </form>
     );
}
 
export default LoginForm;