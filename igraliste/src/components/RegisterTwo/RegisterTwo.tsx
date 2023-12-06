import React, { useState } from 'react';
import "./RegisterTwo.css";
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegistrationTwo: React.FC = () => {

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

    // Check if passwords match 
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Save data to local storage
   
    localStorage.setItem('formData', JSON.stringify(formData));


    // Clear the form data
    setFormData({
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
    });

    // alert('Data saved successfully!');
  };

  return (
    <div className='register-form '>
      <img src="../images/Logo.png" alt="" className='logo-RegisterTwo'/>
    <form onSubmit={handleSubmit}  > 
      <div>
        <label htmlFor="name">Име:</label>
        <input type="text" id="name" name="name" placeholder='Кирил' value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="surname">Презиме:</label>
        <input type="text" id="surname" name="surname" placeholder='Поповски' value={formData.surname} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Емаил:</label>
        <input type="email" id="email" name="email"placeholder='example@example.com' value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Лозинка:</label>
        <input type="password" id="password" name="password"placeholder='************' value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="repeatPassword">Повтори Лозинка:</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder='************'
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className='flex-paragraph'>
      <span><img src="../images/registerTwo.png" alt="" /></span>

      <p>Испраќај ми известувања за нови зделки и промоции.</p>
      </div>
      <button type="submit" className='input-submit' >
        Регистирај се
        </button>
        
     <p className='marginaBottom'>Со вашата регистрација, се согласувате со Правилата и Условите за кориснички сајтови.</p>
    </form >
    </div>
  );
};

export default RegistrationTwo;
