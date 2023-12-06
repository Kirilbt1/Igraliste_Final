// Login.tsx
import React, { useState } from 'react';
import "./Login.css"
import SocialMediaBtn from '../ReusableComponents/SocialMediaBtn';
import { Link } from 'react-router-dom';
interface LoginProps {
  onSuccessfulLogin?: () => void;
}

const Login: React.FC<LoginProps> = ({ onSuccessfulLogin = () => {} }) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve stored username and password from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered username and password match the stored data
    if (storedEmail === email && storedPassword === password) {
      // 
      onSuccessfulLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login-form'>
      <img src="../images/Logo.png" alt="" className='logo-RegisterTwo'/>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='************'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p className='jaZaboravi'>Ја заборавивте Лозинката</p>

        <button type="submit" className='inputSubmit'>Најависе</button>
      </form>
      <p>Или</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <SocialMediaBtn
        icon="../images/Googlepic.png"
        text="Регистрирај се преку Google"
       
      />
    <SocialMediaBtn
        icon="../images/Googlepic.png"
        text="Регистрирај се преку Google"
       
      />
      <div className='flex-par'>
      <p>Немаш профил?</p>
      <Link to="/RegisterOne"> <p className='register'>Регистирај се</p></Link>
     
      </div>
      <p >Сите права задржани @ Игралиште Скопје</p>
    </div>
  );
};

export default Login;
