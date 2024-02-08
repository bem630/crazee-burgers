//import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths"
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper"
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const Menu = () => {
    //state
    const {
        menu,
        isModeAdmin,
        handleDelete,
        resetMenu,
        setProductSelected,
        productSelected,
    } = useContext(OrderContext);
    
    //comportements (gestionnaires d'evenement)
    const handleClick = (idProductClicked) => { 
        const productClickedOn = menu.find((product) => product.id === idProductClicked) ;
        setProductSelected(productClickedOn);
     }
     

    //affichage
     if(menu.length ===0) { 
        if (!isModeAdmin) return <EmptyMenuClient/>
        return <EmptyMenuAdmin onReset= {resetMenu} />
    }

    const handleCardDelete = (event, idProductToDelete) => { 
        event.stopPropagation()
        handleDelete(idProductToDelete)
        idProductToDelete === productSelected.id &&
        setProductSelected(EMPTY_PRODUCT)
        //titleEditRef.current.focus()
     }

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
                        onDelete = {(event) => handleCardDelete(event, id)}
                        onClick = { () => handleClick(id)}
                        isHoverable = {isModeAdmin}
                        isSelected={checkIfProductIsClicked(id, productSelected.id)}
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
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
        
`;