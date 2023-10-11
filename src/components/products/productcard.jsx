import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productcard.css';
import { FetchedProducts } from '../../api/products';
import { getToken } from '../../utils/auth';


function ProductCard() {
  const [products, setProducts] = useState([]);
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
  console.log(products);

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Description {product.description} </p>
            <p>Price : {product.price}</p>
          </li>
        ))}
      </ul>  
    </div>
  );
}

export default ProductCard;
