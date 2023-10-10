import React from 'react';

function Navbar() {
  return (
    <nav
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 20px',
      }}
    >
      <div
        sx={{
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Your Logo
      </div>
      <div
        sx={{
          cursor: 'pointer',
        }}
      >
        Sidebar
      </div>
      <div
        sx={{
          padding: '5px',
        }}
      >
        <select>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>
      <div
        sx={{
          padding: '5px',
        }}
      >
        <input type="text" placeholder="Search" 
          sx={{
            padding: '5px',
            marginRight: '10px',
          }}
        />
        <button
          type="button"
          sx={{
            backgroundColor: '#555',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
      <div
        sx={{
          cursor: 'pointer',
        }}
      >
        Your Profile
      </div>
    </nav>
  );
}

export default Navbar;