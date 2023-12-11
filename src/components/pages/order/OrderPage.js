import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {
    const { username } = useParams();
    
    return ( 
        <OrderPageStyled>
            <div className="container">
                <h1>Bonjour {username} </h1>
                <Link to={'/'}><button>Deconnexion</button></Link>
            </div>
        </OrderPageStyled>
     );
}
 
export default OrderPage;

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background: red;
    height: 95vh;
    width: 1400px;
  }
`;