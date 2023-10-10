import React from 'react';
import './cards.css';

function Card({ cardData, onAddButtonClick }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{cardData.title}</h2>
        <p>{cardData.description}</p>
      </div>
      <button className="add-button" onClick={() => onAddButtonClick(cardData)}>
        Add
      </button>
    </div>
  );
}
export default Card;
