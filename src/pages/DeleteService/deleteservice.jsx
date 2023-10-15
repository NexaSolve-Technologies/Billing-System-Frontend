import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './deleteservice.css'
import { getToken, removeToken } from '../../utils/auth';
import { Button } from '@mui/material';
import ProductCard from '../../components/products/productcard';
import PackageCard from '../../components/packages/packagecard';


function DeleteService() {
  const token = getToken('token');
  const Navigate = useNavigate();
  const [recentlyRemoved, setRecentlyRemoved] = useState([]);
  
  const removeFromBackend = (itemToRemove) => {
    //bakend-logic daal dena
    setRecentlyRemoved([...recentlyRemoved, itemToRemove]);
  };

  const handleOnBackClick = () => {
    Navigate('/dashboard');
  };

  return (
    <div>
      <div className="nav-div">
        <nav className="navb">
          <Button onClick={handleOnBackClick}>Back</Button>
        </nav>
      </div>

      <div className="product-page">
        <div className="product-container">
          <ProductCard onRemoveFromBackend={removeFromBackend} />
        </div>
        <div className="package-container">
          <PackageCard onRemoveFromBackend={removeFromBackend} />
        </div>
      </div>

      <div className="recently-removed">
        <h2>Recently Removed</h2>
        <ul>
          {recentlyRemoved.map((item) => (
            <li key={item._id}>{item.name} was removed</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DeleteService;
