import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

const AddForm = () => {
    return ( 
        <div>
            <form action="submit">
                <input type="image" src="" alt="Aucune image" /><br />
                <p>
                    <FaHamburger />
                    <input type="text" placeholder="Produit (ex: Super Burger)" />
                </p>
                <p>
                    <BsFillCameraFill/>
                    <input type="url" name="url" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
                </p>
                <p>
                    <MdOutlineEuro/>
                    <input type="number" name="Prix" id="Prix" placeholder="Prix"/>
                </p>
            </form>
        </div>
     );
}
 
export default AddForm;