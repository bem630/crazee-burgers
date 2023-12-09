import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
    const { inputValues } = useParams();
    
    return ( 
        <div>
            <h1>Bonjour {inputValues} </h1>
            <Link to={'/'}><button>Deconnexion</button></Link>
        </div>
     );
}
 
export default OrderPage;