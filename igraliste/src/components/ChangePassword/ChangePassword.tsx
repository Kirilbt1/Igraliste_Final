import React, { useState } from 'react';
import "./ChangePassword.css"
import { Link, useNavigate } from "react-router-dom";

interface ChangePasswordProps {
  onChangePassword?: (newPassword: string) => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

 
    if (name === 'currentPassword') {
      setCurrentPassword(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'repeatNewPassword') {
      setRepeatNewPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    if (newPassword !== repeatNewPassword) {
      alert('New passwords do not match!');
      return;
    }

 
    if (onChangePassword) {
      onChangePassword(newPassword);
    }


    const storedUserData = localStorage.getItem('formData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

     
      if (currentPassword === userData.password) {
        userData.password = newPassword;
        localStorage.setItem('formData', JSON.stringify(userData));
        alert('Пасвордот е променет');
        navigate("/myProfiles");

      } else {
        alert('Current password is incorrect!');
      }
    }
  };

  return (
    <div className='change-pass-form'>
      <Link to="/">
      <img src="../images/Logo.png" alt="" className='logo-change-pass' />
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword" className='register-text-change'>Стара лозинка:</label>
          <br />
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className='margina-bottom-change'
            value={currentPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className='register-text-change'>Нова лозинка:</label>
          <br />
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className='margina-bottom-change'
            value={newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="repeatNewPassword" className='register-text-change'>Повтори нова лозинка:</label>
          <br />
          <input
            type="password"
            id="repeatNewPassword"
            name="repeatNewPassword"
            className='margina-bottom-change'
            value={repeatNewPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='zacuvaj-change'>Зачувај</button>
      </form>
    </div>
  );
};

export default ChangePassword;
