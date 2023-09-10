import { useState } from "react";
import React from "react";
import { useRegisteredCards } from "../../Helpers/LocalStorage";
import { toast } from "react-toastify";
import { AllMasseges } from "../../Helpers/ToastMasseges";
import "../../styles/BusinessCards.css";
export default function BusinessCardPage(props) {
  const [BusinessName, setBusinessName] = useState("");
  const [BusinessDescription, setBusinessDescription] = useState("");
  const [BusinessAddress, setBusinessAddress] = useState("");
  const [BusinessPhone, setBusinessPhone] = useState("");
  const [BusinessImage, setBusinessImage] = useState(null);
  const registeredCards = useRegisteredCards();
  const Card = {
    BusinessName,
    BusinessDescription,
    BusinessAddress,
    BusinessPhone,
    BusinessImage,
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user ? user.id : props.id;
  const defulte = "https://altitudews.com.au/wp-content/uploads/2014/12/virgin-media-business.jpg";

  const handleOnClick = () => {
    if (BusinessName == "") {
      toast.error(AllMasseges.BusinessNameError);
    } else if (BusinessDescription == "") {
      toast.error(AllMasseges.BusinessDescriptionError);
    } else if (BusinessAddress == "") {
      toast.error(AllMasseges.BusinessAddressError);
    } else if (BusinessPhone == "" ) {
      toast.error(AllMasseges.BusinessPhoneError1);
    } 
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingCard = registeredCards.find((card) => {
      return (
        card.BusinessName == Card.BusinessName &&
        card.BusinessDescription == Card.BusinessDescription &&
        card.BusinessAddress == Card.BusinessAddress &&
        card.BusinessPhone == Card.BusinessPhone
      );
    });
    if (existingCard) {
      toast.error(AllMasseges.SameCard);
      return;
    }
      
    if (BusinessImage) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const dataUrl = event.target.result;
        const updatedUserCard = {
          ...Card,
          id,
          BusinessImage: dataUrl,
        };
        const newUsers = [...registeredCards, updatedUserCard];
        localStorage.setItem("registeredCards", JSON.stringify(newUsers));
      };
      reader.readAsDataURL(BusinessImage);
    } 
     else {
      const updatedUserCard = {
        ...Card,
        id,
        BusinessImage: defulte,
      };
      const newUsers = [...registeredCards, updatedUserCard];
      localStorage.setItem("registeredCards", JSON.stringify(newUsers));
    }

    setTimeout(() => {
      if (location.pathname == "/mytabs") {
        location.pathname = "/mytabs";
      } else if (location.pathname == "/businessregistration") {
        location.pathname = "/signin";
      }
    }, 1800);
    toast.success(AllMasseges.SuccessfullyCard);
  };
  

  const handleImageChange = (event) => {
    setBusinessImage(event.target.files[0]);
  };

  return (
    <form className="AllinputStyle" onSubmit={handleSubmit}>
      <p>
        <label>Business Name</label>
        <br></br>
        <input
          type="text"
          className="InputText"
          placeholder="Business Name"
          value={BusinessName}
          required="required"
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </p>

      <p>
        <label>Business Description</label>
        <br></br>
        <input
          type="text"
          className="InputText"
          placeholder="Business Description"
          value={BusinessDescription}
          required="required"
          onChange={(e) => setBusinessDescription(e.target.value)}
        />
      </p>

      <p>
        <label>Business Address</label>
        <br></br>
        <input
          type="text"
          className="InputText"
          placeholder="Business Address"
          value={BusinessAddress}
          required="required"
          onChange={(e) => setBusinessAddress(e.target.value)}
        />
      </p>

      <p>
        <label>Business Phone</label>
        <br></br>
        <input
          type="number"
          className="InputText"
          placeholder="Business Phone"
          value={BusinessPhone}
          required="required"
          onChange={(e) => setBusinessPhone(e.target.value)}
        />
      </p>

      <p>
        <label>Business Image</label>
        <br></br>
        <input type="file" name="Business Image" onChange={handleImageChange} />
      </p>

      <p>
        <button type="submit" className="InputButton" onClick={handleOnClick}>
          Create Card
        </button>
      </p>
    </form>
  );
}
