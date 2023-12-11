import styled from "styled-components";
import { theme } from "../../theme";

const PrimaryButton = ({iconChevron, label}) => {
    return ( 
        <PrimaryButtonStyled> 
            <span>{label}</span> 
            {iconChevron && iconChevron} 
        </PrimaryButtonStyled>
     );
}
 
export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
  
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.round};
    font-size: 15px;
    padding: 18px 24px;
    font-weight: ${theme.fonts.weights.heavy};
    line-height: 1;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    text-align: center;
    cursor: pointer;
    transition: all 200ms ease-out;
    width: 100%;
    &:hover {
    background-color: #fff;
    color: ${theme.colors.primary};
    transition: all 200ms ease-out;
    border: 1px solid ${theme.colors.primary};
  }
  .icon-btn {
    font-size: 15px;
    margin-left: ${theme.spacing.xs};
  }
`;