// MyProfile.js
import React, { useState, useEffect } from 'react';
import "./MyProfile.css"
import { Link } from 'react-router-dom';
interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface RegistrationFormData {
  address: string;
  mobileNumber: string;
  bio: string;
}

const MyProfile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [registrationFormData, setRegistrationFormData] = useState<RegistrationFormData>({
    address: '',
    mobileNumber: '',
    bio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Determine which set of data is being updated
    if (Object.keys(formData).includes(name)) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else if (Object.keys(registrationFormData).includes(name)) {
      setRegistrationFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  useEffect(() => {
    // Fetch data from local storage
    const storedFormData = JSON.parse(localStorage.getItem('formData') || '{}');
    const storedRegistrationFormData = JSON.parse(localStorage.getItem('registrationFormData') || '{}');

    // Update state with fetched data
    setFormData(storedFormData);
    setRegistrationFormData(storedRegistrationFormData);
  }, []);

  const handleSubmit = () => {
    // Data is saved in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('registrationFormData', JSON.stringify(registrationFormData));

    alert('Промените се зачувани');
  };

  return (
    <div className='myProfile'>
      <Link to="/">
   <img src="../images/Logo.png" alt="" className='logo-myProfile'/></Link>

      {/* Display User Data */}
   
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} >
          <label className='label-data-MyProfile'>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <br />
          <input type="text" name={key} value={value} onChange={handleChange}className='inputs-margin-myProf' />
        </div>
      ))}

      {/* Display Registration Form Data */}
     
      {Object.entries(registrationFormData).map(([key, value]) => (
        <div key={key}>
          <label className='label-data-MyProfile'>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <br />
          <input type="text" name={key} value={value} onChange={handleChange} className='inputs-margin-myProf'/>
        </div>
      ))}
<div className='flex-paragraph-registertwo'>
      <span><img src="../images/registerTwo.png" alt="" /></span>

      <p>Испраќај ми известувања за нови зделки и промоции.</p>
      </div>
      {/* Submit Button */}
      <button className='zacuvaj-MyProfile' onClick={handleSubmit}>Зачувај</button>
    </div>
  );
};

export default MyProfile;
