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
  
  const initialProducts = [
    { id: 1, title: 'Product 1', description: 'Description 1' },
  ];

  const initialPackages = [
    { id: 4, title: 'Package 1', description: 'Combo of Product 1 and Product 2' },
  ];

  const [products] = useState(initialProducts);
  const [packages] = useState(initialPackages);
  // add to cart func
  const handleAddToCart =(itemData)=>{
    const existingItem=cartItems.find((item)=>item.id===itemData.id);

    if(existingItem){
      setCartItems((prevCartItems)=>
      prevCartItems.map((item)=>
      item.id===itemData.id
      ?{...item,quantity:item.quantity+1}
      :item
      )
    );
    }else{
      setCartItems((prevCartItems)=>[...prevCartItems,{...itemData,quantity:1}]);
    }
  };

  const handleRemoveFromCart=(itemToRemove)=>{
    setCartItems((prevCartItems)=>
    prevCartItems.filter((item)=>item.id!==itemToRemove.id)
    );
  };

  const handleProceedToPay = ()=>{
    // payment page ka navigation
    // filhal payment
    Navigate('/payment');
  };

  return(
    <div className="product-page">
      <div className="product-section">
        <h2>Products</h2>
        <div className="product-container">
          {products.map((product)=>(
            <ProductCard
            key={product.id}
            productData={product}
            onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="package-section">
        <h2>Packages</h2>
        <div className="package-container">
          {packages.map((packageItem)=>(
            <PackageCard
            key={packageItem.id}
            packageData={packageItem}
            onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className='cart-on-productpage'>
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onProceedToPay={handleProceedToPay}/>
      </div>
    </div>
  );
}


export default ProductPage;
