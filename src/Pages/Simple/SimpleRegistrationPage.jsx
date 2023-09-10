import  SignUp  from "../../Components/SignUp";

function SimpleRegistrationPage()
{
    const ButtonName='Sign Up',Category="Simple",Head="Simple Registration";
    return (<SignUp ButtonName={ButtonName} Category={Category} Head={Head}></SignUp>);
}
export {SimpleRegistrationPage};