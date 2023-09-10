import React from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisteredUsers } from '../Helpers/LocalStorage';
import { AllMasseges } from '../Helpers/ToastMasseges';
import BusinessCardPage from '../Pages/Business/BusinessCardPage';
import "../styles/SignUp.css"



export default function SignUp(props) 
{
console.log(props)
const [email,setEmail ] = useState('');
const [password,setPassword ] = useState('');
const [name,setName] = useState('');
const [passwordCheck,setPasswordCheck] = useState('');
const [HidePage,setHidePage ] = useState(true);
const [ShowNext,setShowNext ] = useState(false);
const {ButtonName,Category,Head}=props;
const user = {email,password,name,Category}
const registeredUsers= useRegisteredUsers();
const id = registeredUsers.length;
const DigitsEx= /(?=.*?[0-9])/;
const UpperCaseEx   = /(?=.*?[A-Z])/;
const LowerCaseEx   = /(?=.*?[a-z])/;

const [isShown, setIsSHown] = useState(false);
const togglePassword = () => {
  setIsSHown((isShown) => !isShown);
};



    const handleOnClick = () =>
    {
        
        if(email==""||password==""||name=="" )
        {
            toast.error(AllMasseges.EPN_Error);
        }
        else if (passwordCheck=="")
        {
            toast.error(AllMasseges.PassChecked_Error);
        }
        
    }

   const HandleSubmit =(e) => 
   {
        e.preventDefault();
    const existingUser = registeredUsers.find((user) => user.email == email);
    if (existingUser) {
      toast.error(AllMasseges.User_Error);
      return;
    }
    if (passwordCheck!=password)
    {
        toast.error(AllMasseges.Pass_Confirm);
        return;
    }
    const updatedUser = { ...user, id };
    const newUsers = [...registeredUsers, updatedUser];
    localStorage.setItem("registeredUsers", JSON.stringify(newUsers));
    if(password.length<6 || password.length>8 )
    { 
    toast.error(AllMasseges.PassLength);
    return;
    }
    else if (!DigitsEx.test(password) || !UpperCaseEx.test(password) || !LowerCaseEx.test(password))
    {
        toast.error(AllMasseges.Pass_Error);
        return;
    }
    else if (name.length<3 || name.length>15)
    {
        toast.error(AllMasseges.Name_Error);
        return;
    }
    else if (Category == "Simple")
    {
        setTimeout(() => {location.pathname = "/signin"; }, 1800)
        toast.success(AllMasseges.Successfully_Registered_Simple)
        return;
    }
    else{
        setTimeout(() => {setHidePage(false), setShowNext(true)}, 1800)
        toast.success(AllMasseges.Successfully_Registered_Busines);
        
    }
   }
  return (
        
        <div>
       {(  HidePage && <> 
       <div className='box'>
       <form onSubmit={HandleSubmit}>
       <span className="text-center"><ins>{Head}</ins></span>
       <div className="input-container">  
            <input type="email" value={email} required="required" onChange={(e)=>setEmail(e.target.value)} />
        <label>Email Address</label>
        </div>
        <div className="input-container" >
            <input type={isShown ? "text" : "password"} value={password} required="required" onChange={(e)=>setPassword(e.target.value)}  />
        <label>Password </label>
        </div>
        <div className="input-container" >
            <input type={isShown ? "text" : "password"} value={passwordCheck} required="required" onChange={(e)=>setPasswordCheck(e.target.value)}  />
        <label>Confirm Password </label>
        </div>
        <div className="input-container" > 
            <input type="text" value={name} required="required" onChange={(e)=>setName(e.target.value)}  />
        <label>Name</label>
        </div>
        <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
          <label className="ShowPass">Show password</label>
        <br/>
        <button type='submit' className='btn' onClick={handleOnClick}>{ButtonName}</button>
        </form></div></> ) }

        {ShowNext && <BusinessCardPage  id={id}  />}
        </div>  
  )
}



