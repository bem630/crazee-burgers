import styled from "styled-components";
import { theme } from "../../theme";

const Tab = ({ Icon, onClick, className, label1, label2 }) => {
    return ( 
        <TabStyled onClick={onClick} className={className}>
            <div className="icon">{ Icon && Icon }</div>
            {label1 && <span className="label">{label1}</span>}
            {label2 && <span className="label">{label2}</span>}
        </TabStyled>
     );
}
 
export default Tab;

const TabStyled = styled.button`
    background-color: ${theme.colors.greyBlue};
    height: 43px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    background: ${theme.colors.white};
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    border-radius: 5px 5px 0 0;
    box-shadow: ${theme.shadows.subtle};
    border-width: 1px 1px 2px 1px;
    cursor: pointer;
    position: relative;
    left: 4%;
    top: 1px;

    /*:hover {
        border-bottom: 2px solid  ${theme.colors.white};
    }*/

    .icon {
        display: flex;
    }
    .label {
        margin-left: 13px;
    }
`;