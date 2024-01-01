import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
//import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

const AddForm = () => {
    const {handleAddProduit} = useContext(OrderContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddProduit();
    }
    
    return ( 
            <AddFormStyled action="submit" onSubmit={handleSubmit}>
                <div className="image-preview">ImagePreview</div>
                <div className="input-fields">
                        {/*<FaHamburger className="icon" />*/}
                        <input type="text" placeholder="Produit (ex: Super Burger)" />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <input type="url" name="url" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <input type="number" name="Prix" id="Prix" placeholder="Prix"/>
                    
                </div>
                <button className="submit-button">Ajouter un nouveau produit au menu</button>
                {/*<input type="image" src="" alt="Aucune image" /><br />
                */}
            </AddFormStyled>
     );
}
 
export default AddForm;

const AddFormStyled = styled.form`
    border: 2px solid black;
    display: grid;
    height: 100%;
    width: 70%;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2px;
    .image-preview {
        background: red;
        grid-column: 1 / 2;
        grid-row: 1 / 4;
    }
    .input-fields {
        background: red;
        grid-column: 2/ span 3;
        grid-row: 1/ span 3;
        
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 3fr;
    }
    .submit-button {
        background: green;
        grid-column: 2 / span 3;
        width: 50%;
    }
    
    input {
        font-size: 15px;
        width: 80%;
    }
    .icon {
    margin-right: ${theme.spacing.xs};
    font-size: 15px;
    color: ${theme.colors.greySemiDark};
  }
`;


