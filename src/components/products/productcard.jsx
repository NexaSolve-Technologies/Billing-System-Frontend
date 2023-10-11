import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productcard.css';
import { FetchedProducts } from '../../api/products';
import { getToken } from '../../utils/auth';
import { BatteryFull } from '@mui/icons-material';


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

//   return (
//     <div className='card-content'>
//       <h2>Products List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             <h3>{product.name}</h3>
//             <p>Description {product.description} </p>
//             <p>Price : {product.price}</p>
//           </li>
//         ))}
//       </ul>  
//     </div>
//   );
// }

// export default ProductCard;



// function ProductCard() {
//   const [products, setProducts] = useState([]);
//   const token = getToken('token');
//   const navigate = useNavigate();

  useEffect(() => {
    // Fetch Products from the Backend with the provided token.
    FetchedProducts(token)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error('Error While Fetching Products', err);
      });
  }, [token]);

  const handleAddToCart = (productId) => {
    // Implement your logic to add the product to the cart.
    // You can send a request to your backend or update the state here.
    console.log(`Added product with ID ${productId} to the cart`);
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
            <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
