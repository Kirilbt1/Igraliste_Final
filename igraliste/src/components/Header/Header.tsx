import React, { useState } from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import HamburgerMenu from '../HamburgerMeny/HamburgerMenu';
import Carousel from '../Carousel/Carousel';
const Header = () => {

const [hamburgerMeny,setHamburgerMeny]=useState(false);
const [search,setSearch]=useState(false);

const hamburgerClicked =()=>{
  console.log("Hamburger clicked");
  setHamburgerMeny(!hamburgerMeny);
}
const searchClicked = () =>{
  console.log("searchClicked");
  setSearch(!search);
}
const handleArrow =()=>{
  setSearch(false)
}

  return (
    <div className=''>
      <div className='meny'>
        <img src="../images/NavMeny.png" alt="" 
        onClick={hamburgerClicked}/>
        <Link to="/"><img src="../images/Logo.png" alt="" /></Link>
        {search ? (
          <SearchBar handleArrow={handleArrow} />
        ) : (
          <img
            src="../images/Search.png"
            alt=""
            onClick={searchClicked}
          />
        )}

        {hamburgerMeny && <HamburgerMenu />}
      </div>
      {!setSearch && <Carousel/>}
    </div>
  )
}

export default Header
