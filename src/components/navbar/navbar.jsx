import React from 'react';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
  };

  const commonItemStyle = {
    cursor: 'pointer',
  };

  const logoStyle = {
    ...commonItemStyle,
    fontSize: '24px',
    fontWeight: 'bold',
  };

//   const locationDropdownStyle = {
//     ...commonItemStyle,
//     padding: '5px',
//   };

  const searchStyle = {
    ...commonItemStyle,
    display: 'flex',
    alignItems: 'center',
  };

  const searchInputStyle = {
    ...commonItemStyle,
    padding: '5px',
    marginRight: '10px',
  };

  const searchButtonStyle = {
    ...commonItemStyle,
    backgroundColor: '#555',
    border: 'none',
    padding: '5px 10px',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Your Logo</div>
      {/* <div style={locationDropdownStyle}>
        <select>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div> */}
      <div style={searchStyle}>
        <input type="text" placeholder="Search" style={searchInputStyle} />
        <button type="button" style={searchButtonStyle}>
          Search
        </button>
      </div>
      <div style={commonItemStyle}>Your Profile</div>
    </nav>
  );
}

export default Navbar;
