//import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

const OrderPage = () => {
    //const { username } = useParams();
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isEditSelected, setIsEditSelected] = useState(false);
    const [isAddSelected, setIsAddSelected] = useState(true);
    const [currentTabSelected, setcurrentTabSelected] = useState("add");

    const orderContextValue = {
      isModeAdmin, 
      setIsModeAdmin,
      isCollapsed,
      setIsCollapsed,
      isEditSelected,
      setIsEditSelected,
      isAddSelected,
      setIsAddSelected,
      currentTabSelected,
      setcurrentTabSelected,
    }
    
    return ( 
        <OrderContext.Provider value={orderContextValue}>
          <OrderPageStyled>
              <div className="container">
                  <Navbar />
                  <Main/>
              </div>
          </OrderPageStyled>
        </OrderContext.Provider>
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
    width: 1250px; //normalement je dois mettre width: 1400px; comme Vi
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;