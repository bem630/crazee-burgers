import { useState } from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    // state
    const [ inputValues, setInputValue ] = useState("");

    // comportements
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Bonjour ${inputValues}`)
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
        <div>
            <h1>Bienvenue chez nous !</h1><br/>
            <h2>Connectez vous</h2>
            <form action="" onSubmit={handleSubmit}>
                <input value={inputValues} onChange={handleChange}
                 type="text" placeholder="Entrez votre prénom..." required />
                <button>Accédez à votre espace</button>
            </form>
            <LoginForm/>
        </div>
     );
}
 
export default LoginPage;