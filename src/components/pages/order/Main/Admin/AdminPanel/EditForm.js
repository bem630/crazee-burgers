import { useContext } from "react";
//import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./InputTextConfig";

const EditForm = () => {
    // state
    const { productSelected, setProductSelected, handleEdit } = useContext(OrderContext);

    
    // comportements (gestionnaires d'événement ou "event handlers")
    const handleChange = (e) => {
        const {name, value} = e.target;
        const productBeingUpdated = {...productSelected, [name]: value }
        setProductSelected(productBeingUpdated) // cette ligne update le formulaire
        handleEdit(productBeingUpdated, e) // cette ligne update le menu
    }
    const inputTexts = getInputTextsConfig(productSelected);
    // affichage
    return ( 
        <EditFormStyled>
                <ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
                <div className="input-fields">
                        {inputTexts.map (
                            (input) => (
                                <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist"/>
                            )
                        ) }
                    
                </div>
            </EditFormStyled>
     );
}
 
export default EditForm;

const EditFormStyled = styled.div`
  display: grid;
    height: 100%;
    width: 70%;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    
    .input-fields {
        grid-area: 1 / 2 / -2 / 3;
        display: grid;
        grid-row-gap: 8px;
    }
    .submit {
        grid-area: 4 / -2 / -1 / -1;
        display:flex;
        align-items: center;
        position: relative;
        top: 3px;

        .submit-button {
            //width: 50%;
            height: 100%;
        }


    }  
`;