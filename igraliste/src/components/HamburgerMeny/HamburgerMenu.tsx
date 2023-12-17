import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
const [isMenyOpen,setIsMenyOpen]=useState(false);
  const [showVintage, setVintage] = useState(false);
  const [showBrands, setBrands] = useState(false);
  const [showAccesories, setAccesories] = useState(false);

  const handleVitage = () => {
    setVintage(!showVintage);
    setBrands(false);
    setAccesories(false);
  }
  const handleBrands = () => {
    setBrands(!showBrands);
    setVintage(false);
    setAccesories(false);
  }
  const handleAccesories = () => {
    setAccesories(!showAccesories);
    setBrands(false);
    setVintage(false);
  } 

  return (
    <div className='hamburger-menu'>
      <div className='meny-content'>
        <ul className='list'>
          <li className='nova'>Ново</li>
          <li onClick={handleVitage} className='main-list-hamb'>
            Vintage облека
            <img
              src="../images/downarrow.png"
              alt=""
            />
          </li>
          {showVintage && (
            <ul className="">
              <li className="see-all"><Link to="/product-list" className='see-all'>Види ги сите</Link> </li>
              <li className='liststyle' >Блузи</li>
              <li className='liststyle'>Панталони</li>
              <li className='liststyle'>Здолништа/шорцеви</li>
              <li className='liststyle'>Фустани</li>
              <li className='liststyle'>Палта и јакни</li>
              <li className='liststyle'>Долна облека</li>
            </ul>
          )}
          <li onClick={handleBrands} className='main-list-hamb'>
            Брендови
            <img
              src="../images/downArrow.png"
              alt=""
            />
          </li>
          {showBrands && (
            <ul className="">
              <li className="see-all"><Link to="/product-list" className='see-all'>Види ги сите</Link> </li>
              <li className='liststyle'>Pinc Partywear</li>
              <li className='liststyle'>Factory Girl</li>
              <li className='liststyle'>Main Days</li>
              <li className='liststyle'>Нежно</li>
              <li className='liststyle'>Ред</li>
              <li className='liststyle'>Наш</li>
              <li className='liststyle'>Зш да не </li>
              <li className='liststyle'>Francil </li>
              <li className='liststyle'>Urma </li>
              <li className='liststyle'>Candle nest </li>
              <li className='liststyle'>Beyong green </li>
              <li className='liststyle'>Getta </li>
            </ul>
          )}
          <li onClick={handleAccesories} className='main-list-hamb'>
            Аксесоари
            <img
              src="../images/downArrow.png"
              alt=""
            />
          </li>
          {showAccesories && (
            <ul className="">
              <li className="see-all"><Link className='see-all' to="/product-list">Види ги сите</Link> </li>
              <li className='liststyle'>Ташни</li>
              <li className='liststyle'>Накит</li>
            </ul>
          )}
          <li className='main-list-hamb'>Lifestyle</li>
          <Link to="/GiftCard">
            <li className='podari-karticka'>Подари картичка*</li>
            </Link>
          <li className="on-sale">Попуст</li>
        </ul>
        <ul className="icons-list">
          <li className="cart-nav">
            <img className="cart-nav" src="../images/cart.png" alt="" />
            <Link className='span-hamb' to="/Order"> Кошничка</Link>
            {/* <span className='span-hamb'></span> */}
          </li>
          <li className="cart-nav">
            <img src="../images/Heart.png" alt="" className="cart-nav"/>
            {/* <span  className='span-hamb'>Омилени</span> */}
            <Link className='span-hamb' to="/Order"> Омилени</Link>
          </li>
          <li className="cart-nav">
            <img src="../images/user.png" alt="" className="cart-nav" />
            
            <Link className="span-hamb" to="/Login" >Регистрирај се/  Логирај се
            
            </Link>
          
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu;

