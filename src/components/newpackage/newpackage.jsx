import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../products/productcard.css';
import { FetchedProducts } from '../../api/products';
import { getToken } from '../../utils/auth';
import { BatteryFull } from '@mui/icons-material';
import Navbar from '../navbar/navbar';
import './newpackage.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { addPackage } from '../../api/packages';

function NewPackage(){
    const [products, setProducts] = useState([]);
    const [pack, setPack] = useState({
        name : '',
        price :'',
        description : '',
        products : [],
        // image : null,
    });
        const token = getToken('token');
        const Navigate = useNavigate();
        const [selectedProducts, setSelectedProducts] = useState([]);
      
        // const handleQuantityChange = (e) => {
        //   const newQuantity = parseInt(e.target.value);
        //   setQuantity(newQuantity);
        // };
        
        useEffect(() => {
          FetchedProducts(token)
            .then((data) => {
              setProducts(data);
            })
            .catch((err) => {
              console.error('Error While Fetching Products', err);
            })
        }, [token]);  

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setPack({
            ...pack,
            [name] : value,
        })
    }

        const handleAddProduct = (product) => {
            let updatedProducts = [...selectedProducts]; 
            updatedProducts.push(product);
            setSelectedProducts(updatedProducts);
          }; 
          
    // const handleImageChange = (e) => {
    //     const imageFile = e.target.files[0];
    //     setPack({
    //         ...pack,
    //         image : imageFile,
    //     });
    // }
          
    const handleOnBackClick = () => {
        Navigate('/dashboard')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const productIds = selectedProducts.map(product => product._id);
            const updatedPack = {
                ...pack,
                products : productIds,
            }
            console.log(updatedPack);
            addPackage(token, updatedPack)
                .then((data) => {
                    console.log(data);
                })
                .then(() => {
                    alert('Product Added');
                })
            
        } catch (err) {
            console.error(err);
        }
    };


    return(
        <div className='newpackage-page'>
            <div className='nav-div'>
                <nav className='navb' >
                <Button onClick={handleOnBackClick} >Back</Button>
                </nav>
            </div>
            <div className='main-container'>
                <div className='product-card-container'>
                    <h2>Products List</h2>  
                    <div className='product-cards'>
                        {products.map((product) => (
                        <div className='product-card' key={product._id}>
                            <h3>{product.name}</h3>
                            <p>Description: {product.description}</p>
                            <p>Price: {product.price}</p>
                            <button onClick={() => handleAddProduct(product)}>Add</button>
                            {/* <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button> */}
                        </div>
                        ))}
                    </div>
                </div>
                <div className='selected-items'>
                    <h2>Selected Products</h2>
                        {selectedProducts.map((product, index) => (
                            <div key={index} className='selected-product-item'>
                            <h3>{product.name}</h3>
                            <p>Description: {product.description}</p>
                            <p>Price: {product.price}</p>
                            </div>
                        ))}
                </div>
                <div className="form-container">
                    <h2 className="form-title">Add New Package</h2>
                    <form onSubmit={handleSubmit}>
                            <div>
                            <TextField
                                label="Package Name"
                                id="name"
                                name="name"
                                value={pack.name}
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
                                value={pack.price}
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
                                value={pack.description}
                                onChange={handleInputChange}
                                required
                                fullWidth
                                multiline
                            />
                            </div>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onChange={handleSubmit}
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
    )

}
export default NewPackage;