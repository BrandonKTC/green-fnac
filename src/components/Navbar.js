import './Navbar.css'
import logo from './logo.png'
import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Navbar() {


  return (
  <>
  <nav className="navbar">
   <div className="navbar-container">
      <Link to="/">
      <img src={logo} className='navbarLogo' alt=""/>
     </Link>
   </div>
    <div className="menu-icon">
      <Link to="/list">
        <button className='navbar-btn'>
          Ma Liste
        </button>
      </Link>
    </div>
  </nav>
  </>
  );
}

export default Navbar;
