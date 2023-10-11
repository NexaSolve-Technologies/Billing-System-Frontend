import React, { useState, useEffect } from 'react';
import './packagecard.css';
import { getToken } from '../../utils/auth';
import { FetchedPackages } from '../../api/packages';

function PackageCard({ packageData, onAddToCart }) {
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

  console.log(packages);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = (packageId) => {
    // Implement your logic to add the package to the cart.
    // You can send a request to your backend or update the state here.
    console.log(`Added package with ID ${packageId} to the cart`);
  };

  return (
    <div className="package-card-container">
      <h2>Packages List</h2>
      <div className="package-cards">
        {packages.map((pack) => (
          <div className="package-card" key={pack._id}>
            <h3>{pack.name}</h3>
            <p>Description: {pack.description}</p>
            <p>Price: {pack.customPrice}</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button onClick={() => handleAddToCart(pack._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCard;
