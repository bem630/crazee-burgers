import { useState } from "react";

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
    return ( 
        <div>
            <h1>Bienvenue chez nous !</h1><br/>
            <h2>Connectez vous</h2>
            <form action="" onSubmit={handleSubmit}>
                <input value={inputValues} onChange={handleChange}
                 type="text" placeholder="Entrez votre prénom..." required />
                <button>Accédez à votre espace</button>
            </form>
        </div>
     );
}
 
export default LoginPage;