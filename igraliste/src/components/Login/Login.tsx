import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import SocialMediaBtn from '../ReusableComponents/SocialMediaBtn';
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('formData') || '{}');
    const { email, password } = storedUserData;

    if (formData.email === email && formData.password === password) {
      // Successful login, Than go to Home Page
      alert('Login successful');
      navigate('/');
    } else {
      setError('Погрешен пасворд');
    }
  };

  return (
    <div className='Login'>
      <Link to="/">
      <img src="../images/Logo.png" alt="" className='Logo-Login' />
      </Link>
      <form onSubmit={handleLogin}>
        <div className='input-login-one'>
          <label htmlFor="email" className='login-text' >Email адреса:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="login-text" >Лозинка:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder='**********'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/change-password" >
          <p className='forgot-pass-login'>Ја заборавивте лозинката ?</p></Link>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='input-submit-Login' >
       Најави се  
        
        </button>
      </form>
      <p className='ili'>или</p>
      <SocialMediaBtn
        icon="../images/Googlepic.png"
        text="Регистрирај се преку Google"
       
      />
      <SocialMediaBtn
        icon="../images/Facebook.png"
        text="Регистрирај се преку Facebook"
      />
      <p className='nemas-profil-Login'>
        Немаш профил <Link to="/RegisterTwo"><span className='Login-registrirajse'>Регистрирај се</span></Link>
      </p>
      <p className="sitePrava-Login">Сите права задржани @ Игралиште Скопје</p>
    </div>
  );
};

export default Login;
