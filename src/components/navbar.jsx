import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import logo from '../assets/navbar-icons/book-icon.png';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/browse" className="logo">
          <img
            src={logo}
            alt="Story Sellers"
          />
          Story Sellers
        </Link>

      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contacts">Contact</Link>
      </div>

      <div className="cart">
        <Link to="/cart">
          <ShoppingCart size={30} color="black"/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
