import { useContext, useState } from "react";
import SubmitMessage from "./SubmitMessage";    
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"
import Form from "./Form";
import Button from "../../../../../../reusable-ui/Button"
import OrderContext from "../../../../../../../context/OrderContext";


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
    
    //comportements
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
        setNewProduct(EMPTY_PRODUCT);

        displaySuccesMessage();
    }

    const handleChange = (e) => {
        /*const newValue = e.target.value;
        const name = e.target.name;*/
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    }

    const displaySuccesMessage = () => {
            setIsSubmitted(true)
        setTimeout(()=> {
            setIsSubmitted(false)
        } , 2000)
    }
     // affichage
    return (
        <Form product = {newProduct} onChange = {handleChange} onSubmit={handleSubmit} >
            <>
                <Button
                className="submit-button" 
                label={"Ajouter un nouveau produit au menu"} 
                version="success"  />
                {isSubmitted && ( <SubmitMessage />)}
            </>
        </Form>     
     );
}
 
export default AddForm;