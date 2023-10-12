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
      <ul>
        {cartItems.map((item) => (
          <li key={Math.floor(Math.random()*10000)}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleProceedToCheckout()}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;