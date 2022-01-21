import React from 'react';
import './Searchbox.css';


function SearchBox({ searchChange }) {
  return  <div className="bar">
   <input onChange={searchChange} type="search" className="searchbar" placeholder=" Search Product"/>
    </div>;
}

export default SearchBox