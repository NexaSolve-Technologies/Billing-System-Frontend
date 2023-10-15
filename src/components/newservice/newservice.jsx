import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './newservice.css';
import { getToken } from '../../utils/auth';
import { addService } from '../../api/services';

function NewService() {
  const token = getToken('token');
  const [errorMessage, setErrorMessage] = useState('');
  const [service, setService] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService({
      ...service,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setService({
      ...service,
      image: imageFile,
    });
  };
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(token);
      addService(token, service)
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
                label="Service Name"
                id="name"
                name="name"
                value={service.name}
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
                value={service.price}
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
                value={service.description}
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

export default NewService;
