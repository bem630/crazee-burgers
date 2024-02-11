import styled from "styled-components"
import { theme } from "../../../../../../theme"
import BasketBody from "./BasketBody"
import Footer from "./Footer"

function Basket() {
  return (
    <BasketStyled>
     <header>Header</header>
     <BasketBody/>
     <Footer/>
    </BasketStyled>
  )
}

export default Basket

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  header {
    background-color: ${theme.colors.background_dark};
    color: white;
    height: 70px;
  }
`