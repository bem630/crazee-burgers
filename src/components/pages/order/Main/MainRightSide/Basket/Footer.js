import React from 'react'
import { theme } from '../../../../../../theme'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`