import React from 'react';

function Cart({ cartItems, onRemoveFromCart, onProceedToPay }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onProceedToPay}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;