import styled from "styled-components";

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
    border-radius: 5px;
    margin: 18px 0;
    
    .icon {
    margin-right: 8px;
    font-size: 15px;
    color: #93a2b1;
  }
    input {
        outline-color: blue;
        border: none;
        color: #17161a;
        font-size: 15px;
        width: 100%;
        &::placeholder {
    background-color: white;
    color: lightgrey;
  }
    }
    
`;