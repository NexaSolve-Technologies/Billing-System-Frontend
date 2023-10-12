import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './productcard';
import Cart from '../cart/cart';
import PackageCard from '../packages/packagecard';
import './productpage.css';
import { getToken, removeToken } from '../../utils/auth';
import { linkClasses } from '@mui/material';

function ProductPage(){
  const token = getToken('token');
  const Navigate = useNavigate();
  const [cartItems,setCartItems]=useState([]);
  
   // add to cart function
  const handleAddToCart =(itemData)=>{
  const existingItem = cartItems.find(item => item._id === itemData._id); 
  if (existingItem) {
    const updatedCart = cartItems.map(item => {
      if(item._id === itemData._id) {
        return {
          ...item, // Spread all the quantites
          quantity : item.quantity + 1 // Increase the quantity
        };
      }
      return item;
    });
    setCartItems(updatedCart);
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    const newItem = {
      ...itemData,
      quantity : 1
    };
    setCartItems([...cartItems, newItem])
  }
  };
  
  const handleRemoveFromCart=(itemToRemove)=>{
    const updatedCart = cartItems.filter(item => item._id !== itemToRemove._id)
    
    setCartItems(updatedCart);
  }; 

  return(
    <div className="product-page">
      <div className="product-section">
        <h2>Products</h2>
        <div className="product-container"> 
            <ProductCard onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className="package-section">
        <h2>Packages</h2>
        <div className="package-container">
            <PackageCard onAddToCart={handleAddToCart}/> 
        </div>
      </div>
      <div className='cart-on-productpage'>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
}


export default ProductPage;
