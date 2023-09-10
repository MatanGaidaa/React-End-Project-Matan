import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CardMain from "../../Components/Card/CardMain";
import { useRegisteredCards } from "../../Helpers/LocalStorage";
import BusinessCardPage from "./BusinessCardPage";
import "../../styles/Card.css"
export default function MyTabs() {
  const registeredCards = useRegisteredCards();
  const user = JSON.parse(localStorage.getItem("user"));
  const [HideCards, setHideCards] = useState(true);
  const [ShowCardCreate, setShowCardCreate] = useState(false);
  const Mycards = registeredCards.filter((card) => card.id == user.id);

  return (
    <>
      <div>
        {HideCards && (<> <div style={{padding : 7}} > <button
        className="buttonCreateCard"
          onClick={() => {
            setHideCards(false), setShowCardCreate(true);
          }}
          >
         <b> Create New Card </b><AiOutlinePlus />
        </button></div>
        <div className="Main">
            {Mycards.map((Card, index) => (
              <div key={index}>
                <CardMain Card={Card} index={index} />
              </div>
            ))}
          </div>
        </>)}
        <div>{ShowCardCreate && <BusinessCardPage />}</div>
      </div>
    </>
  );
}
