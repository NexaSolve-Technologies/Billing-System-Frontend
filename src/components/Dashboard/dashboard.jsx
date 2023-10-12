import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import './dashboard.css';
import { Link } from 'react-router-dom';
import backgroundImg from'../../assets/pexels-alexy-almond-3756523.jpg'
import ProductPage from '../products/productpage';

function Dashboard() {

  // const contentStyle = {
  //   marginLeft: '220px',
  // };

  const listItemStyle = {
    marginBottom: '10px',
    fontSize: '18px',
  };
  const signInButtonStyle = {
    backgroundColor: '#FFF2E8',
    color: '#FC8019',
  };
  
  

  return (
    <div className='dashboard-bg' >
      <div>
        <nav className='navb'>
          <div>Your Logo</div>
          <Link to="/signin">
          <Button to="/signin" variant="contained" style={signInButtonStyle}>
            Login
          </Button>
          </Link>
          
        </nav>
      </div>

      {/* <div className='content' style={contentStyle}> */}
        {/* Your main content goes here */}
        {/* For example, you can display user information, products, etc. */}
      {/* </div> */}

      <div className='sidebar'>
        <div className='options-list'>
          <List>
            {/* <ListItemButton style={listItemStyle}>Edit Your Profile</ListItemButton>
            <Divider style={{ backgroundColor: '#FFF2E8' }} /> */}
            <ListItemButton style={listItemStyle}to="/newproduct">Add Product</ListItemButton>
            <Divider style={{ backgroundColor: '#FFF2E8' }} />
            <ListItemButton style={listItemStyle}to="/newpackage">Add Package</ListItemButton>
            <Divider style={{ backgroundColor: '#FFF2E8' }} />
            <ListItemButton style={listItemStyle} to="/productpage">View Packages</ListItemButton>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
