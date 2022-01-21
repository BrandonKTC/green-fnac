import React from 'react';
import logo from './logo.png'
import './ListItem.css'
import { Link } from "react-router-dom";


function ListItem() {
  return (
  <>
  <nav className="listItem">
 <div className="navbar-container">
     <Link to="/">
      <img src={logo} className='navbarLogo' alt=""/>
     </Link>
   </div>
   <div className="menu-icon">
     <Link to="/">
       <button className='listItem-btn'>
         Acceuil
       </button>
       </Link> 
    </div>
  </nav>
  </>
  );
}

export default ListItem;
