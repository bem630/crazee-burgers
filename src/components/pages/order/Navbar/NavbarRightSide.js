import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import { theme } from "../../../../theme";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import OrderContext from "../../../../context/OrderContext";
//import ToggleButton from "../../../reusable-ui/ToggleButton"
const NavbarRightSide = ({ username }) => {

    const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

    //const [isModeAdmin, setIsModeAdmin] = useState(true);
    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
        setIsModeAdmin(!isModeAdmin);
    }
    return ( 
        <NavbarRightSideStyled>
            <ToggleButton isChecked={isModeAdmin} labelIfUnchecked="activer le mode admin" labelIfChecked="desactiver le mode admin" onToggle={displayToastNotification}  />
            <Profile username={username} />   
            <ToastAdmin/>   
        </NavbarRightSideStyled>
     );
}
 
export default NavbarRightSide;

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    
`;