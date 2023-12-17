import React, { useState } from 'react';
import "./RegisterTwo.css";
import { Link, Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegistrationTwo: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match!');
      return;
    }

    


    // Cistam polinja
    setFormData({
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
    });

    alert('Napravivte najava');
    
  };
const handleNavigate=(()=>{

   
  localStorage.setItem('formData', JSON.stringify(formData));
  navigate("/registerThree");
})
  return (
    <div className='register-form '>
  <Link to="/">
      <img src="../images/Logo.png" alt="" className='logo-RegisterTwo'/>
      </Link>
    <form onSubmit={handleSubmit}  > 
      <div>
        <label htmlFor="name" className='register-text'>Име:</label>
        <br />
        <input type="text" id="name" name="name"  className='register-text-input input-text-register-two'placeholder='Кирил' value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="surname"  className='register-text'>Презиме:</label>
        <br />
        <input type="text" id="surname" name="surname"  className='register-text-input input-text-register-two 'placeholder='Поповски' value={formData.surname} onChange={handleChange} required />
      </div>
      <div>
      <label htmlFor="email"  className='register-text'>Email:</label>
        <br />
        <input type="email" id="email"  className='register-text-input input-text-register-two'name="email"placeholder='example@example.com' value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password"  className='register-text'>Лозинка:</label>
        <br />
        <input type="password" id="password"  className='register-text-input input-text-register-two'name="password"placeholder='************' value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="repeatPassword"  className='register-text'>Повтори Лозинка:</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder='************'
          className='register-text-input input-text-register-two'
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex-paragraph-registertwo'>
      <span><img src="../images/registerTwo.png" alt="" /></span>

      <p>Испраќај ми известувања за нови зделки и промоции.</p>
      </div>
      <button type="submit" className='input-submit-register-two' onClick={handleNavigate}>
        Регистирај се
        
        </button>
        
     <p className='marginaBottom'>Со вашата регистрација, се согласувате со Правилата и Условите за кориснички сајтови.</p>
    </form >
    </div>
  );
};

export default RegistrationTwo;

