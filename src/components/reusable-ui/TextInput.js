import styled, { css } from "styled-components";
import { theme } from "../../theme";

const TextInput = ({value, onChange, icon,className, version="normal", ...extraProps}) => {
    return ( 
        <TextInputStyled className={className} version={version}>
            <div className="icon">{ icon && icon }</div>
            <input value={value} onChange={onChange} type="text" {...extraProps}  />
        </TextInputStyled>
     );
}
 
export default TextInput;

const TextInputStyled = styled.div`
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    
    .icon {
      display: flex;
      margin: 0 13px 0 8px;
      font-size: ${theme.fonts.size.SM};
  }
    input {
        border: none;
        font-size: ${theme.fonts.size.SM};
        width: 100%;

        &::placeholder {
        color: ${theme.colors.greyMedium};
  }
    }

    ${({version}) => extraStyle[version]}
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
