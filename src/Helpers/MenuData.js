import {FaSignOutAlt,FaSignInAlt} from 'react-icons/fa';
import {BiHomeHeart} from 'react-icons/bi';
const HomePage = {
displayName:'Home',
linkTo:'/home',
icon : <BiHomeHeart></BiHomeHeart>
};

const AboutPage = {
displayName:'About Us',
linkTo:'/about'
};
const SimpleRegistration= {
displayName:'Simple Registration',
linkTo:'/simpleregistration'
};
const BusinessRegistration = {
displayName:'Business Registration',
linkTo:'/businessregistration'
};
const SignIn = {
displayName:'Sign In',
linkTo:'/signin',
icon : <FaSignInAlt></FaSignInAlt>
};
const MyTabs = {
displayName:'My Tabs',
linkTo:'/mytabs'
};
const LogOut = {
displayName:'Log Out',
linkTo:'/logout',
icon : <FaSignOutAlt></FaSignOutAlt>
};
export const MenuForGuset=[HomePage,AboutPage,SimpleRegistration,BusinessRegistration,SignIn];

export const MenuForBusinessUser=[HomePage,AboutPage,MyTabs,LogOut];

export const MenuForSimpleUser=[HomePage,AboutPage,LogOut];

export const BusinessCard = {
    displayName:'Business Registration',
    linkTo:'/businesscard'
    };