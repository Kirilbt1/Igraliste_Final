import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./HamburgerMenu.css";

const HamburgerMenu = () => {

const [showVintage,setVintage]=useState(false);
const [showBrands,setBrands]=useState(false);
const [showAccesories,setAccesories]=useState(false);

const handleVitage=()=>{
  setVintage(!showVintage);
  setBrands(false);
  setAccesories(false);
  // console.log("Hello")
  
}
const handleBrands=()=>{
  setBrands(!showBrands);
  setVintage(false);
  setAccesories(false);
}
const handleAccesories=()=>{
  setAccesories(!showAccesories);
  setBrands(false);
  setVintage(false);
}

  return (
    <div className='hamburger-menu'>
      <div className=''>
        <ul className='list'>
          <li className='new'>Ново</li>
          <li onClick={handleVitage} className='vintageObleka'>
            Vintage облека{""} 
            <img
              src="../images/downarrow.png"
              alt=""
            />
          </li>
          {showVintage && (
            <ul className="dropdown-menu">
              <li className="see-all">Види ги сите</li>
              <li>Блузи</li>
              <li>Панталони</li>
              <li>Здолништа/шорцеви</li>
              <li>Фустани</li>
              <li>Палта и јакни</li>
              <li>Долна облека</li>
            </ul>
          )}
          <li onClick={handleBrands}>
            Брендови{" "}
            <img
              src="pictures/material-symbols_arrow-back-ios-rounded.png"
              alt=""
            />
          </li>
          {showBrands && (
            <ul className="dropdown-menu">
              <li className="see-all">Види ги сите</li>

              {/* <Link to="/brands/:id">
                {brands.map((brand) => (
                  <li key={brand.id}>{brand.name}</li>
                ))}
              </Link> */}
            </ul>
          )}
          <li onClick={handleAccesories}>
            Аксесоари
            <img
              src="pictures/material-symbols_arrow-back-ios-rounded.png"
              alt=""
            />
          </li>
          {showAccesories && (
            <ul className="dropdown-menu">
            <li className="see-all">Види ги сите</li>
              <li>Ташни</li>
              <li>Накит</li>
            </ul>
          )}
           <li>Lifestyle</li>
          <Link className="gift-card-link" to="gift-cards">
            <li>Подари картичка*</li>
          </Link>
          <li className="on-sale">Попуст</li>
        </ul>
        <ul className="icons-list">
          <li>
            <img className="cart" src="pictures/cart.png" alt="" />
            <span>Кошничка</span>
          </li>
          <li>
            <img src="pictures/ph_heart-straight-thin.png" alt="" />
            <span>Омилени</span>
          </li>
          <li>
            <img src="pictures/ph_user-light.png" alt="" />
            {/* {!user ? ( */}
              <Link className="link-to-log-in" to="/Login">
                <span>Регистрирај се/Логирај се</span>
              </Link>
            {/* ) : ( */}
              <Link className="link-to-log-in" to="/my-profile">
                <span>Мој профил</span>
              </Link>
            {/* )} */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
