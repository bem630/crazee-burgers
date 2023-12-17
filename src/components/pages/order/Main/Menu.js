import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths"

const Menu = () => {
    const [menu, setMenu] = useState(fakeMenu2);
    return ( 
        <MenuStyled>
            {menu.map(({id, imageSource, title, price}) => {
                return (
                    <Card key={id} imageSource ={imageSource} title={title} leftDescription={formatPrice(price)} />
                )
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
    grid-template-columns: repeat(auto-fit, minmax(270px,1fr));
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
        
`;