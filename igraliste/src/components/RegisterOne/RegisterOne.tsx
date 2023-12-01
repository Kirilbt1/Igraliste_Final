import React from 'react'
import { Link } from 'react-router-dom'
import SocialMediaBtn from '../ReusableComponents/SocialMediaBtn'
import "./RegisterOne.css";

const RegisterOne = () => {
  return (
    <div className="register">
      <img className="logo-pic" src="../images/Logo.png" alt="" />
      <Link className="registerTwo-text" to="/RegisterTwo">
        <SocialMediaBtn text="Регистрирај се со емаил адреса"  />
      </Link>
      <p className='ili'>или</p>
      <SocialMediaBtn
        icon="../images/Googlepic.png"
        text="Регистрирај се преку Google"
       
      />
      <SocialMediaBtn
        icon="../images/Facebook.png"
        text="Регистрирај се преку Facebook"
      />
      <div className="logIn">
        Веќе имаш профил?
        <Link to="/Login">
          <span className='Logirajse'>Логирај се</span>
        </Link>
      </div>
   <p className='SitePrava'>Сите права задржани @ Игралиште Скопје</p>
    </div>
  )
}

export default RegisterOne
