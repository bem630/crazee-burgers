import React from 'react'
import { theme } from '../../../../../../../theme'
import styled from 'styled-components'

function EditInfoMessage() {
  return (
    <EditInfoMessageStyled className="sentence">
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  )
}

export default EditInfoMessage

const EditInfoMessageStyled = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  .live-update {
    text-decoration: underline;
  }
`