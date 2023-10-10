import React from 'react';
import './productcard.css';

function ProductCard({ cardData, onAddButtonClick }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{cardData.title}</h2>
        <p>{cardData.description}</p>
      </div>
      <button className="add-button" onClick={() => onAddButtonClick(cardData)}>
        +
      </button>
    </div>
  );
}
export default ProductCard;
