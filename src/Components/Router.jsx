import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../Pages/AboutPage";
import { BusinessRegistrationPage } from "../Pages/Business/BusinessRegistrationPage";
import { HomePage } from "../Pages/HomePage";
import LogOut from "../Pages/LogOut";
import MyTabs from "../Pages/Business/MyTabs";
import { SignIn } from "../Pages/SignIn";
import { SimpleRegistrationPage } from "../Pages/Simple/SimpleRegistrationPage";
import BusinessCardPage from '../Pages/Business/BusinessCardPage';

const Router = () => {
  return(<>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />   
    <Route path="/about" element={<AboutPage />} />
    <Route path="/simpleregistration" element={<SimpleRegistrationPage />}/>
    <Route path="/businessregistration" element={<BusinessRegistrationPage />}/>
    <Route path="/businesscard" element={<BusinessCardPage />}/>
    <Route path="/signin" element={<SignIn />} />
    <Route path="/mytabs" element={<MyTabs />} />
    <Route path="/logout" element={<LogOut />} />
    
    
  </Routes>
  </>
  );
}
export default Router;

