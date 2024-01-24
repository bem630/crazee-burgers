import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { version } from "react";

const TextInput = ({value, onChange, icon, version="normal", ...extraProps}) => {
    return ( 
        <TextInputStyled version={version}>
            { icon && icon}
            <input value={value} onChange={onChange} type="text" {...extraProps}  />
        </TextInputStyled>
     );
}
 
export default TextInput;

const TextInputStyled = styled.div`
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    /*flex-direction: row;
    padding: 18px 24px;
    
    background-color: white;*/
    
    .icon {
      display: flex;
      margin: 0 13px 0 8px;
      font-size: 15px;
      //justify-content: center;
      //align-items: center;
  }
    input {
        border: none;
        font-size: 15px;
        width: 100%;

        &::placeholder {
        color: ${theme.colors.greyMedium};
  }
    }

    ${({version}) =>
      extraStyle[version]
    }
    
`;



const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
   `
const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    color: ${theme.colors.dark};
    background: ${theme.colors.background_white};

    &:focus {
      outline: 0;
    }
  }
  `

  const extraStyle = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist,
  }
