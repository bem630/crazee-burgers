import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";

const Menu = () => {
    const [menu, setMenu] = useState(fakeMenu2);
    return ( 
        <MenuStyled>
            {menu.map((produit) => {
                return <div className="title-produit">{produit.title}</div>
                } )}
        </MenuStyled>
     );
}
 
export default Menu;

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-row-gap: 60px;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 50px 150px;
    justify-items: center;
    

    .title-produit {
        background: red;
        width: 240px;
        height: 330px;
        //box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 20%);
    }
        
`;