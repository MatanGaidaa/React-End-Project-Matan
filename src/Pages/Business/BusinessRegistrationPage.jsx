import  SignUp  from "../../Components/SignUp";

function BusinessRegistrationPage()
{
    const ButtonName='Next',Category="Business",Head="Business Registration";
    return (<SignUp ButtonName={ButtonName} Category={Category} Head={Head}></SignUp>);
    
}
export {BusinessRegistrationPage};