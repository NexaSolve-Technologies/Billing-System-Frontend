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
        console.error('Error while fetching Products', err)
      })
  }, [token]);

  console.log(packages);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {packages.map((pack) => (
          <li key={pack._id}>
            <h3>{pack.name}</h3>
            <p>Description : {pack.description} </p>
            <p>Price : {pack.customPrice}</p>            
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default PackageCard;