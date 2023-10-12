import React from 'react';
import { useLocation } from 'react-router-dom';
import './cart.css'

function Cart({ cartItems,onRemoveFromCart, onProceedToPay }) {  
     
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
      <button onClick={onProceedToPay}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;