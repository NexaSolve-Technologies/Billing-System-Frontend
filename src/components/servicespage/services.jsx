import React, { useEffect, useState } from 'react';
import Cart from '../cart/cart';
import { useNavigate } from 'react-router-dom';
import './services.css';
// import { FetchedServices } from '../../api/services';
import { getToken } from '../../utils/auth';
import { BatteryFull } from '@mui/icons-material';


function ServiceCard({onAddToCart}) {
  const [service, setService] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  const token = getToken('token');
  const Navigate = useNavigate();

  // const handleQuantityChange = (e) => {
  //   const newQuantity = parseInt(e.target.value);
  //   setQuantity(newQuantity);
  // };


  
//   useEffect(() => {
    
//     // Fetch Products from the Backend with the provided token.
//     FetchedServices(token)
//       .then((data) => {
//         setService(data);
//       })
//       .catch((err) => {
//         console.error('Error While Fetching Products', err);
//       })
//   }, [token]); 



  const handleAddToCart = (service) => {
    onAddToCart(service);
  };

  return (
    <div className='service-card-container'>
      <h2>Services List</h2>
      <div className='service-cards'>
        {service.map((service) => (
          <div className='service-card' key={service._id}>
            <h3>{service.name}</h3>
            <p>Description: {service.description}</p>
            <p>Price: {service.price}</p>
            <button onClick={() => handleAddToCart(service)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
