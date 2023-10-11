import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import './dashboard.css';
import backgroundImg from'../../assets/pexels-alexy-almond-3756523.jpg'

function Dashboard() {

  const contentStyle = {
    marginLeft: '220px',
  };

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
          <Button variant="contained" style={signInButtonStyle}>
            Login
          </Button>
        </nav>
      </div>

      {/* <div className='content' style={contentStyle}> */}
        {/* Your main content goes here */}
        {/* For example, you can display user information, products, etc. */}
      {/* </div> */}

      <div className='sidebar'>
        <div className='options-list'>
          <List>
            <ListItemButton style={listItemStyle}>Edit Your Profile</ListItemButton>
            <Divider style={{ backgroundColor: '#FFF2E8' }} />
            <ListItemButton style={listItemStyle}>Add Product</ListItemButton>
            <Divider style={{ backgroundColor: '#FFF2E8' }} />
            <ListItemButton style={listItemStyle}>Add Package</ListItemButton>
            <Divider style={{ backgroundColor: '#FFF2E8' }} />
            <ListItemButton style={listItemStyle}>View Packages</ListItemButton>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
