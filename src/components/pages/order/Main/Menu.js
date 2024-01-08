//import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths"
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
//import { fakeMenu } from "../../../../fakeData/fakeMenu";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {
    //state
    const {menu,isModeAdmin, handleDelete, resetMenu} = useContext(OrderContext);

    //comportements
    
    
    //const [menu, setMenu] = useState(fakeMenu.LARGE);

    //affichage
    if(menu.length ===0) return <div>
        <span>Pas de produit</span>
        <button onClick={resetMenu}>generer les produit</button>
    </div>
    return ( 
        <MenuStyled>
            {menu.map(({id, imageSource, title, price}) => {
                return (
                    <Card 
                        key={id} 
                        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
                        //imageSource ={imageSource === "" ? "/images/coming-soon.png" : imageSource} 
                        title={title} 
                        leftDescription={formatPrice(price)} 
                        hasDeleteButton = {isModeAdmin}
                        onDelete = {() => handleDelete(id)}
                    />
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