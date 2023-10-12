import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './cart.css'

function Cart({ cartItems,onRemoveFromCart }) {  
  const Navigate = useNavigate();
  const handleProceedToCheckout = () => {
    Navigate('/checkout', { state : { cart : cartItems}});
  }
     
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
      <ul className='selected-items-list'>
        {cartItems.map((item) => (
          <li className='items' key={Math.floor(Math.random()*10000)}>
            <div>{item.name} - Quantity: {item.quantity}</div>
            <button onClick={() => onRemoveFromCart(item)}>-</button>
          </li>
        ))}
      </ul>
      </div>
      
      <button onClick={() => handleProceedToCheckout()}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;