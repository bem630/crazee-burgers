import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";


const Main = () => {
    
    return ( 
        <MainStyled>
            {/*<div className="basket">Basket</div>*/}
            <div className="menu-and-admin">
                <Menu/>
                <div className="admin">Admin</div>
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
            .admin {
            background-color: red;
            height: 250px;
        }
        }
        
`;