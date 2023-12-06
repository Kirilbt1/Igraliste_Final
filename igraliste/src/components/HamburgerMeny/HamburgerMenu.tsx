import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./HamburgerMenu.css";

const HamburgerMenu = () => {

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
          <li onClick={handleVitage} className='vintageObleka'>
            Vintage облека
            <img
              src="../images/downarrow.png"
              alt=""
            />
          </li>
          {showVintage && (
            <ul className="">
              <li className="see-all"><Link to="/Product">Види ги сите</Link> </li>
              <li className='liststyle' >Блузи</li>
              <li className='liststyle'>Панталони</li>
              <li className='liststyle'>Здолништа/шорцеви</li>
              <li className='liststyle'>Фустани</li>
              <li className='liststyle'>Палта и јакни</li>
              <li className='liststyle'>Долна облека</li>
            </ul>
          )}
          <li onClick={handleBrands}>
            Брендови{" "}
            <img
              src="../images/downArrow.png"
              alt=""
            />
          </li>
          {showBrands && (
            <ul className="dropdown-menu">
              <li className="see-all"><Link to="/Product">Види ги сите</Link> </li>
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
          <li onClick={handleAccesories}>
            Аксесоари
            <img
              src="../images/downArrow.png"
              alt=""
            />
          </li>
          {showAccesories && (
            <ul className="dropdown-menu">
              <li className="see-all"><Link to="/Product">Види ги сите</Link> </li>
              <li>Ташни</li>
              <li>Накит</li>
            </ul>
          )}
          <li>Lifestyle</li>
          <Link className="" to="/">
            <li>Подари картичка*</li>
          </Link>
          <li className="on-sale">Попуст</li>
        </ul>
        <ul className="icons-list">
          <li>
            <img className="cart" src="../images/cart.png" alt="" />
            <span>Кошничка</span>
          </li>
          <li>
            <img src="../images/Heart.png" alt="" />
            <span>Омилени</span>
          </li>
          <li>
            <img src="../images/user.png" alt="" />
            {/* Handle Loggin*/}
            <Link className="link-to-log-in" to="/Login">Регистрирај се/Логирај се
              {/* <span></span> */}
            </Link>
            {/* Handle Loggin*/}
            {/* <Link className="link-to-log-in" to="/Profile">
              <span>Мој профил</span>
            </Link> */}
            {/* Handle Loggin*/}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu;
