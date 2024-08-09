import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Clients
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Football</MenuItem>
          <MenuItem onClick={handleClose}>Music</MenuItem>
          <MenuItem onClick={handleClose}>Acting</MenuItem>
          <MenuItem onClick={handleClose}>Tennis</MenuItem>
          <MenuItem onClick={handleClose}>Boxing</MenuItem>
        </Menu>
        <a href="#latest-news">Latest News</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <input type="text" placeholder="Search" className="bg-gray-700 text-white p-2 rounded" />
    </nav>
  );
};

export default Navbar;
