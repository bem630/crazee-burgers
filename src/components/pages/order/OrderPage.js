//import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
//import { EmptyProduct } from "./Main/Admin/AdminPanel/AddForm";
import { EMPTY_PRODUCT } from "../../../enums/product";

const OrderPage = () => {
    //const { username } = useParams();
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isEditSelected, setIsEditSelected] = useState(false);
    const [isAddSelected, setIsAddSelected] = useState(true);
    const [currentTabSelected, setcurrentTabSelected] = useState("add");
    const [menu, setMenu] = useState(fakeMenu.LARGE);
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    
    // comportements (gestionnaire de state ou "state handlers")
    const handleAddProduit = (newProduit) => { 
        // 1. copie du tableau
        const menuCopy = JSON.parse(JSON.stringify(menu));

        // 2. manip de la copie du tableau
        const menuUpdated = [newProduit, ...menuCopy];

        // 3. update du state
        setMenu(menuUpdated);
     }

     const handleDelete = (idOfProductToDelete) => {
      //1) copy du state
      const menyCopy = [...menu];
      //2) Manipulation de copy du state
      const menuUpdated = menyCopy.filter((product) => product.id !== idOfProductToDelete );
       //3) Updated du state avec seteur dedié
       setMenu(menuUpdated);
     }

     const handleEdit = (productBeingEdit) => { 
      // 1. copie du tableau
      const menuCopy = JSON.parse(JSON.stringify(menu));

      // 2. manip de la copie du tableau
      const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdit.id)
      menuCopy[indexOfProductToEdit] = productBeingEdit

      // 3. update du state
      setMenu(menuCopy);
   }

     const resetMenu = () => {
      setMenu(fakeMenu.LARGE)
  }

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
      menu,
      handleAddProduit,
      handleDelete,
      resetMenu,
      newProduct,
      setNewProduct,
      productSelected,
      setProductSelected,
      handleEdit
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
    width: 1400px; //normalement je dois mettre width: 1250px; comme Vi
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;