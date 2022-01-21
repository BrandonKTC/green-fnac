import React from 'react';
import './Card.css'

const Card = ({image, object, utilisation, entretien}) => {
  return <>
   {/* <h1>{object}</h1> */}
   <div className="cards">
   <div class="card">
    <img class="card__image" src={image} alt=""/>
    <div class="card__content">
      <p>
       {entretien}
      </p>
      <p>
        {utilisation}
      </p>
    </div>
    </div>
   </div>
  </>;
};

export default Card;
