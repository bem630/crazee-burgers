import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

export const EmptyProduct = {
    id: "",
    title: "",
    imageSource: "",
    price: 0,
}

const AddForm = () => {
    const {handleAddProduit, newProduct, setNewProduct} = useContext(OrderContext);
    //const [newProduct, setNewProduct] = useState(EmptyProduct);
    const [isSubmitted, setIsSubmitted] = useState(false);
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
        setIsSubmitted(true);
        displaySuccesMessage();
    }

    const displaySuccesMessage = () => {
        setTimeout(()=> {
            setIsSubmitted(false)
        } , 2000)
    }

    const handleChange = (e) => {
        /*const newValue = e.target.value;
        const name = e.target.name;*/
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    }
    
    return ( 
            <AddFormStyled action="submit" onSubmit={handleSubmit}>
                <ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
                <div className="input-fields">
                        {/*<FaHamburger className="icon" />*/}
                        <TextInput
                            name="title" 
                            value={newProduct.title}
                            type="text"
                            placeholder="Produit (ex: Super Burger)"
                            onChange={handleChange}
                            icon={<FaHamburger/>}
                            version="minimalist"
                            />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <TextInput 
                            type="text"
                            name="imageSource" 
                            placeholder="Lien URL d'une image(ex: https://photo-frites.png)"
                            value={newProduct.imageSource}
                            onChange={handleChange}
                            icon={<BsFillCameraFill/>}
                            version="minimalist"
                            />
                        {/*<BsFillCameraFill className="icon"/>*/}
                        <TextInput 
                            type="text"
                            name="price"
                            id="Prix"
                            placeholder="Prix"
                            value={newProduct.price ? newProduct.price: "" }
                            onChange={handleChange}
                            icon={<MdOutlineEuro/>}
                            version="minimalist"
                        />
                    
                </div>
                <div className="submit">
                    <PrimaryButton className="submit-button" label={"Ajouter un nouveau produit au menu"} version="success"  />
                    {/*<button className="submit-button">Ajouter un nouveau produit au menu</button>*/}
                    {isSubmitted && ( 
                        <SubmitMessage />)}
                </div>
            </AddFormStyled>
     );
}
 
export default AddForm;

const AddFormStyled = styled.form`
    //border: 2px solid black;
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



/*input {
        font-size: 15px;
        width: 80%;
    }
    .icon {
    margin-right: ${theme.spacing.xs};
    font-size: 15px;
    color: ${theme.colors.greySemiDark};
  }*/
