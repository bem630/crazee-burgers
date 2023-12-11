import styled from "styled-components";
import { theme } from "../../theme";

const TextInput = ({value, onChange, icon, ...extraProps}) => {
    return ( 
        <TextInputStyled>
            { icon && icon}
            <input value={value} onChange={onChange} type="text" {...extraProps}  />
        </TextInputStyled>
     );
}
 
export default TextInput;

const TextInputStyled = styled.div`
    display: flex;
    flex-direction: row;
    padding: 18px 24px;
    align-items: center;
    background-color: white;
    border-radius: ${theme.borderRadius.round};
    margin: 18px 0;
    
    .icon {
    margin-right: ${theme.spacing.xs};
    font-size: 15px;
    color: ${theme.colors.greySemiDark};
  }
    input {
        outline-color: ${theme.colors.blue};
        border: none;
        color: ${theme.colors.dark};
        font-size: 15px;
        width: 100%;
        &::placeholder {
    background-color: white;
    color: lightgrey;
  }
    }
    
`;