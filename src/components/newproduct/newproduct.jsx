import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './newproduct.css';
import { getToken } from '../../utils/auth';
import { addProduct } from '../../api/products';

function NewProduct() {
  const token = getToken('token');
  const [errorMessage, setErrorMessage] = useState('');
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProduct({
      ...product,
      image: imageFile,
    });
  };
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        addProduct(token, product)
        .then((data) => {
          console.log(data);
        })
    } catch (err) {
      console.error(err);
      setErrorMessage('An error Occurred. Please try again later.')
    }
  };

  return (
    <div>
      <nav className="navb">
        <div>Your Logo</div>
      </nav>
      <div className="container-content">
        <div className="form-container">
          <h2 className="form-title">Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="Product Name"
                id="name"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                label="Price"
                id="price"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                required
                fullWidth
              />
            </div>
            <div>
              <TextField
                label="Description"
                id="description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                required
                fullWidth
                multiline
              />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#FC8019',
                color: 'white',
              }}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
