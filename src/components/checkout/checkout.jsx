import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './checkout.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';


function Checkout({ selectedProducts }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process customer information here, e.g., send it to a server
  };

  const calculateTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };


  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        
      <div className="selected-products">
        <Typography component="h1" variant="h5">
            Selected Products
          </Typography>
          <ul className='slist'>
            {selectedProducts ? (
              selectedProducts.map((product) => (
                <li className='slist' key={product.id}> <span>{product.name}</span> - <span>${product.price}</span></li>
              ))
            ) : (
              <p>No selected products.</p>
            )}
          </ul>
          {/* Display the grand total */}
          <hr/>
          <div className="grand-total">
            <li className='slist'><span>Grand Total:</span> <span className='bold'>${calculateTotalPrice()}</span></li>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="customer-form">
          <h1>Customer Information</h1>
          <div>
          <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                //   value={formData.firstName}
                //   onChange={handleInputChange}
                  autoFocus
                />
            {/* <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            /> */}
          </div>
          <div>
          <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                //   value={formData.userName}
                //   onChange={handleInputChange}
                  autoComplete="username"
                />
            {/* <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            /> */}
          </div>
          <div>
          <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phone"
                //   value={formData.phone}
                //   onChange={handleInputChange}
                  autoComplete="tel"
                />
            {/* <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            /> */}
          </div>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Proceed to Pay
            </Button>
        </form>
      </div>
    </div>
  );
}

// Sample products
const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];

export{sampleProducts} ;
export default Checkout;
