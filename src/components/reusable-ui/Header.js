import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

function Header({children}) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;