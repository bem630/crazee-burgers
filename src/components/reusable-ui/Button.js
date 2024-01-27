import styled, { css } from "styled-components";
import { theme } from "../../theme";

const PrimaryButton = ({iconChevron, label, className, version="normal"}) => {
    return ( 
        <Button className={className} version={version}> 
            <span>{label}</span> 
            <div className="icon">{iconChevron && iconChevron} </div>
        </Button>
     );
}
 
export default PrimaryButton;

const Button = styled.button`
    ${(props) => props.version === "normal" && extraStylePrimary};
    ${(props) => props.version === "success" && extraStyleSuccess};
    ${({version})=> extraStyle[version]}
    
`;

const extraStylePrimary = css`
    width: 100%;
    border: 1px solid #ff9f1b;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: 15px;
    font-weight: ${theme.fonts.weights.heavy};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color:  ${theme.colors.white};
    color: ${theme.colors.primary};
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    &:active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  &:hover {
    color: ${theme.colors.success};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }
  &:active {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }

`
const extraStyle = {
  primary: extraStylePrimary,
  success: extraStyleSuccess,
}