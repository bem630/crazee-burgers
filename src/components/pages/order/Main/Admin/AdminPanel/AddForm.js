import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
//import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";

const AddForm = () => {
    const {handleAddProduit} = useContext(OrderContext);

    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState(0);
    const handleTitleChange =(e)=> {
        setTitle(e.target.value);
    }
    const handleImageSourceChange =(e)=> {
        setImageSource(e.target.value);
    }
    const handlePriceChange =(e)=> {
        setPrice(e.target.value);
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduit = 
        {
            id: new Date().getTime(),
            title: title,
            price: price,
            imageSource: imageSource,
        }
        handleAddProduit(newProduit);
    }
    
    return ( 
            <AddFormStyled action="submit" onSubmit={handleSubmit}>
                <div className="image-preview">Aucune image</div>
                <div className="input-fields">
                        {/*<FaHamburger className="icon" />*/}
                        <input 
                            value={title}
                            type="text"
                            placeholder="Produit (ex: Super Burger)"
                            onChange={handleTitleChange}
                            />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <input 
                            type="text"
                            name="url" 
                            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                            value={imageSource}
                            onChange={handleImageSourceChange}
                            />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <input 
                            type="text"
                            name="Prix"
                            id="Prix"
                            placeholder="Prix"
                            value={price ? price: "" }
                            onChange={handlePriceChange}
                        />
                    
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


