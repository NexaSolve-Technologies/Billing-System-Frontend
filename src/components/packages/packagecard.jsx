import React, { useState, useEffect } from 'react';
import './packagecard.css';
import { getToken } from '../../utils/auth';
import { FetchedPackages } from '../../api/packages';

function PackageCard({ onAddToCart, onRemove}) {
  const [quantity, setQuantity] = useState(1);
  const [packages, setPackages] = useState([]);
  const token = getToken('token'); 

  useEffect( () => {
    FetchedPackages(token)
      .then((data) => {
        setPackages(data);
      })
      .catch((err) => {
        console.error('Error while fetching Packages', err);
      });
  }, [token]);
 
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = (pack) => {
    onAddToCart(pack);
  };

  return (
    <div className="package-card-container">
      <h2>Packages List</h2>
      <div className="package-cards">
        {packages.map((pack) => (
          <div className="package-card" key={pack._id}>
            <h3>{pack.name}</h3>
            <p>Description: {pack.description}</p>
            <p>Price: {pack.price}</p>
            <button onClick={() => onRemove(pack._id)}>Remove</button>
            <button onClick={() => handleAddToCart(pack)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCard;
