import React from 'react'
import { useRegisteredCards } from '../../Helpers/LocalStorage';
import "../../styles/Card.css"
export default function CardMain(props) {
    const {Card,index} = props
    const registeredCards = useRegisteredCards();
  
    function handleDelete()
    { 
      if (window.confirm("Are you sure you want to cancel the registration?"))
       {
        registeredCards.splice(index,1);
        localStorage.setItem("registeredCards", JSON.stringify(registeredCards));
        location.pathname="/mytabs"
       }
    }

    


  return (<> <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={Card.BusinessImage}  alt="Avatar" style={{width:'300px',height:"316px"}}/>
      <h1 className='centered'>{Card.BusinessName}</h1> 
    </div>
    <div className="flip-card-back">
      <h1>{Card.BusinessName}</h1> 
      <p>
          <label><ins>Business Description</ins></label>
          <br />
          {Card.BusinessDescription}
          </p> 
          <p>
          <label><ins>Business Address</ins></label>
          <br />
          {Card.BusinessAddress}
          </p>
          <p>
          <label><ins>Business Phone</ins></label>
          <br />
          {Card.BusinessPhone}
          </p>
          <p>
            <button className='buttonDelet' onClick={handleDelete}>Delete Card</button>
          </p>
    </div>
  </div>
</div>
</>  )
}
