import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Components/Footer';

function App() {

  return (
    <>

      <Header/>
      <Main/>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      <Footer/>
     </>
  );
}

export default App;

