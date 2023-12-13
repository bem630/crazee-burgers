import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";

const Menu = () => {
    const [menu, setMenu] = useState(fakeMenu2);
    return ( 
        <MenuStyled>
            {menu.map((produit) => {
                return (
                    <div className="produit">
                        <div className="image">
                            <img src={produit.imageSource} alt={produit.title} />
                        </div>
                        <div className="info-text">
                            <div className="title">{produit.title}</div>
                            <div className="description">
                                <div className="price">{produit.price}</div>
                                <button className="add-button">Ajouter</button>
                            </div>
                        </div>
                    </div>
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
    padding: 50px 50px 150px;
    justify-items: center;
    

    .produit {
        background: red;
        width: 240px;
        height: 330px;
        //box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 20%);
        .image {
            width: 240px;
            height: 145px;
            img {
            width: 100%;
            height: 100%;
        }
        }
    }
        
`;