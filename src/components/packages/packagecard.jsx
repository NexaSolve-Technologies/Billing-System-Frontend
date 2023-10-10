import React, { useState } from 'react';
import './packagecard.css';

function PackageCard({ packageData, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>{packageData.title}</h2>
        <p>{packageData.description}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button
        className="add-button"
        onClick={() => onAddToCart(packageData, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PackageCard;