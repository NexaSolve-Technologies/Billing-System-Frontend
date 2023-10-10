import React, { useState } from 'react';
import './productcard.css';

function ProductCard({ productData, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button
        className="add-button"
        onClick={() => onAddToCart(productData, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
