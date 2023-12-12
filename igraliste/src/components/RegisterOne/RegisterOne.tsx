import React from 'react'
import { Link } from 'react-router-dom'
import SocialMediaBtn from '../ReusableComponents/SocialMediaBtn'
import "./RegisterOne.css";

const RegisterOne = () => {
  return (
    <div className="registerOne">
      <img className="logo-pic-register-one" src="../images/Logo.png" alt="" />
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
      <div className="logIn-register-one">
        Веќе имаш профил?
        <Link to="/Login">
          <span className='logirajse-register-one'>Логирај се</span>
        </Link>
      </div>
   <p className='sitePrava-register-one'>Сите права задржани @ Игралиште Скопје</p>
    </div>
  )
}

export default RegisterOne
