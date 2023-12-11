import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {
    const { username } = useParams();
    
    return ( 
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    <div className="leftside">
                        Logo
                    </div>
                    <div className="rightside">
                        <h1>Bonjour {username} </h1>
                        <Link to={'/'}><button>Deconnexion</button></Link>
                    </div>
                </div>
                <div className="main">Main</div>
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
    display: flex;
    flex-direction: column;
    .navbar {
        background: ${theme.colors.blue};
        height: 10vh;
        display: flex;
        justify-content: space-between;
        .leftside {
            background: ${theme.colors.success};
        }
        .rightside {
            background: ${theme.colors.success};
        }
    }
    .main {
        background: ${theme.colors.background_white};
        //height: calc( 95vh - 10vh)
        flex: 1;
    }
  }
`;