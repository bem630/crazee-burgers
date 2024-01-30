import { useContext, useState } from "react";
//import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./InputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

const EditForm = () => {
    const { productSelected } = useContext(OrderContext);
    const [productBeingEdit, setProductBeingEdit] = useState(EMPTY_PRODUCT)

    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProductBeingEdit({...productBeingEdit, [name]: value })
    }
    const inputTexts = getInputTextsConfig(productSelected);
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