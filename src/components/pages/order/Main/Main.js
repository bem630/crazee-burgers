import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";


const Main = () => {
    const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);
    
    return ( 
        <MainStyled>
            {/*<div className="basket">Basket</div>*/}
            <div className="menu-and-admin">
                <Menu/>
                {isModeAdmin && <Admin/>}
            </div>
        </MainStyled>
     );
}
 
export default Main;

const MainStyled = styled.div`
        background: ${theme.colors.background_white};
        height: calc( 95vh - 10vh);
        //flex: 1;
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
        display: grid;
        grid-template-columns: 1fr;
        //overflow-y: scroll;
/*
        .basket {
            background: blue;
        }*/
        .menu-and-admin {
            overflow-y: hidden;
            display: grid;
            
        }
        
`;