import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <h1>Bonjour {} </h1>
            <Link to={'/'}><button>Retourner à la page d'accueil</button></Link>
        </div>
     );
}
 
export default ErrorPage;