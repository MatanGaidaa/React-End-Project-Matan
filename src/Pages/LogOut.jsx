import { toast } from "react-toastify";
import { AllMasseges } from "../Helpers/ToastMasseges";
import "react-toastify/dist/ReactToastify.css";
export default function LogOut() {
    localStorage.removeItem("user");
    toast.success(AllMasseges.SeeYouSoon)
    setTimeout( () => {  
    location.pathname="/home"; }, 1800);
    
        return <div></div>
}


