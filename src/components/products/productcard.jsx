import React, { useEffect, useState } from 'react';
import Cart from '../cart/cart';
import { useNavigate } from 'react-router-dom';
import './productcard.css';
import { FetchedProducts } from '../../api/products';
import { getToken } from '../../utils/auth';
import { BatteryFull } from '@mui/icons-material';


function ProductCard({onAddToCart}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  const token = getToken('token');
  const Navigate = useNavigate();

  // const handleQuantityChange = (e) => {
  //   const newQuantity = parseInt(e.target.value);
  //   setQuantity(newQuantity);
  // };
  
  useEffect(() => {
    
    // Fetch Products from the Backend with the provided token.
    FetchedProducts(token)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error('Error While Fetching Products', err);
      })
  }, [token]); 



  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className='product-card-container'>
      <h2>Products List</h2>
      <div className='product-cards'>
        {products.map((product) => (
          <div className='product-card' key={product._id}>
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
