import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
//import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";

const EmptyProduct = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

const AddForm = () => {
    const {handleAddProduit} = useContext(OrderContext);
    const [newProduct, setNewProduct] = useState(EmptyProduct);
    /*
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
    */
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduitToadd = 
        {
            ...newProduct,
            id: crypto.randomUUID(),
            /*id: new Date().getTime(),
            title: newProduct.title,
            price: newProduct.price,
            imageSource: newProduct.imageSource,*/
        }
        handleAddProduit(newProduitToadd);
        setNewProduct(EmptyProduct);
    }

    const handleChange = (e) => {
        /*const newValue = e.target.value;
        const name = e.target.name;*/
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    }
    
    return ( 
            <AddFormStyled action="submit" onSubmit={handleSubmit}>
                <div className="image-preview">
                    {newProduct.imageSource ? (
                        <img src={newProduct.imageSource} alt={newProduct.title} />
                        ) : (
                            <div>Aucune image</div>
                            )}
                </div>
                <div className="input-fields">
                        {/*<FaHamburger className="icon" />*/}
                        <input
                            name="title" 
                            value={newProduct.title}
                            type="text"
                            placeholder="Produit (ex: Super Burger)"
                            onChange={handleChange}
                            />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <input 
                            type="text"
                            name="imageSource" 
                            placeholder="Lien URL d'une image(ex: https://photo-frites.png)"
                            value={newProduct.imageSource}
                            onChange={handleChange}
                            />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <input 
                            type="text"
                            name="price"
                            id="Prix"
                            placeholder="Prix"
                            value={newProduct.price ? newProduct.price: "" }
                            onChange={handleChange}
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
    .image-preview {
        background: red;
        grid-area: 1 / 1 / 4 / 2;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
    .input-fields {
        background: blue;
        grid-area: 1 / 2 / -2 / 3;
        
        display: grid;
    }
    .submit-button {
        background: green;
        grid-area: 4 / -2 / -1 / -1;
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


