import React from 'react'
import GoldenButton from '../ReusableComponents/GoldenButton'
import { Link } from 'react-router-dom'
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer ">
        <div className="footer-container">
          <div className="footer-header">Следи ги нашите новости!</div>
          <div className="footer-txt">
            Биди дел од нашиот newsletter и дознавај прва за промоции, попусти и
            нови колекции.
          </div>
          <form className="registration" action="">
            <label id="e-mail" htmlFor="e-mail">
              E-mail адреса:
            </label>
            <input className="e-mail" type="email" />

            <GoldenButton buttonText="Зачлени се!" />
          </form>
          <div className="about-section">
            <ul className='list-footer'>
              <Link


                to="/About"
              >
                <li>За нас</li>
              </Link>
              <Link to="/Contact">
                <li>Контакт</li>
              </Link>
              <Link to="https://www.google.com/maps"><li>Локатор на продавницата</li></Link>
              <Link to="/Faq">
                <li>Често поставувани прашања (FAQ)</li>
              </Link>
              <Link to="/Login">
                <li>Регистрирај се / логирај се</li>
              </Link>
            </ul>
          </div>
          <div className="social-media">
            <div className="follow-us">Следи не на:</div>
            <div className="social-icon">
              <img src="../images/insta.png" alt="" />
              <span>igralishte.sk</span>
            </div>
            <div className="social-icon">
              <img src="../images/tiktok.png" alt="" /> <span>igralishte.sk</span>
            </div>
          </div>
          <p>Сите права задржани © 2023 igralishtesk.mk</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
