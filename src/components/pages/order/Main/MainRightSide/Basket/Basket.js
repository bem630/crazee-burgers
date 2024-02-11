import styled from "styled-components"
import BasketBody from "./BasketBody"
import Footer from "./Footer"
import Total from "./Total"
import { formatPrice } from "../../../../../../utils/maths"

function Basket() {
  return (
    <BasketStyled>
     <Total amountToPay ={formatPrice(0)}/>
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
  
`