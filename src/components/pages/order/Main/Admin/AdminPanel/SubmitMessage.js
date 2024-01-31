import React from 'react'
import styled from 'styled-components';
import { FiCheck } from "react-icons/fi";
import { theme } from '../../../../../../theme';

function SubmitMessage() {
  return (
    <SubmitMessageStyled className="submit-message">
        <FiCheck className="icon"/>
        <span className="message">Ajouté avec succès !</span>
    </SubmitMessageStyled>
  )
}

export default SubmitMessage

const SubmitMessageStyled = styled.div`
    display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        .icon {
            color: ${theme.colors.success};
            margin-left: 10px;
            width: 1em;
            height: 1em;
            border: 1px solid ${theme.colors.success};
            border-radius: 50%;
            vertical-align: middle;
        }
        .message {
            margin-left: 5px;
            font-size: ${theme.fonts.weights.medium};
            color: ${theme.colors.success};
        }
`;