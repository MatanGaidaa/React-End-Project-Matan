import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisteredUsers } from "../Helpers/LocalStorage";
import { AllMasseges } from "../Helpers/ToastMasseges";
import "../styles/Signin.css";
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registeredUsers= useRegisteredUsers();
    const [isShown, setIsSHown] = useState(false);

    //פונקציה שאחראית על שינוי של הטייפ של הסיסמא
    const togglePassword = () => {
      setIsSHown((isShown) => !isShown);
    };

    
    const handleOnClick = () => 
{
  if(email==""||password=="")
  {
    toast.error(AllMasseges.EmailAndPass);
  }

}
   
const HandleSubmit = (e) =>
{ 
    e.preventDefault();
    const matchingUser = registeredUsers.find((user) => user.email == email && user.password == password);
    if (matchingUser) {
        toast.success(AllMasseges.GladUBack);
        setTimeout(() => {
          location.pathname = "/home";
        }, 1800);
        //שמירת הנתונים של יוזר תחת מפתח חדש יוזר
        localStorage.setItem("user", JSON.stringify(matchingUser));
      } else {
        toast.error(AllMasseges.OneIsIncorrect);
      }
    }  
    
  

    return (
        <>
        <div className="box1">
            <form  onSubmit={HandleSubmit}>
                
                  <span className="text-center1"><ins>Sign In</ins></span>
                    <div className="input-container1">
                    <input type="email" value={email} required="required" onChange={(e)=> setEmail(e.target.value)}  />
                  <label>Email Address</label>
                </div>
                
                
                    <div className="input-container1">
                    <input type={isShown ? "text" : "password"} value={password} required="required" onChange={(e)=> setPassword(e.target.value)}  />
                    <label>Password</label>
                   </div>     
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
          <label className="ShowColor1">Show password</label>
          <br/>
                <button type="submit" className="btn1" onClick={handleOnClick} >SUBMIT</button>
            </form>
            </div>
        </>
    );
}
export { SignIn };