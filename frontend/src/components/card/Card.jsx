import React from 'react';
import './card.css';

function Card({ image, title, description, buttonText,onClick }) {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
}



export default Card;
