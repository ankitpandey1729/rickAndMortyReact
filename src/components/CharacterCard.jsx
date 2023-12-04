// CharacterCard.js
import React from 'react';

const CharacterCard = ({ id, image, name, status, location }) => (
  <div key={id}>
    <img src={image} alt="" />
    <div>
      <div>Name : {name}</div>
      <div>
        <div>Last Location : {location.name}</div>
      </div>
      <div>
        <div>Status : {status}</div>
      </div>
    </div>
  </div>
);

export default CharacterCard;
