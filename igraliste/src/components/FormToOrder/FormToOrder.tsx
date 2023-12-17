// MyProfile.js
import React, { useState, useEffect } from 'react';
// import './MyProfile.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./FormToOrder.css"
import GoldenButton from '../ReusableComponents/GoldenButton';
interface ProfileFormData {
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
}

const FormToOrder: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  useEffect(() => {
    // Fetch data from local storage when the component mounts
    const storageKey = isRegistered ? 'registrationFormData' : 'formData';
    const storedFormData = JSON.parse(localStorage.getItem(storageKey) || '{}');

    // Update the form data based on registration status
    setFormData(storedFormData);
  }, [isRegistered]);

  const handleCheckboxChange = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    
    <div className="myProfile">
      <Link to="/">
    <img src="../images/Logo.png" alt="" className="logo-myProfile" />
  </Link>
  <div className='label-data-checkbox'>
  

        <input type="checkbox" checked={isRegistered} onChange={handleCheckboxChange} />
        <label className="label-data-order-checkbox" >вметни ги информациите од мојот профил</label>
      
      </div>
      
      {/* Display Form Fields */}
      <div>
        <label className="label-data-MyProfile">Име:</label>
        <br />
        <input type="text" name="name" value={formData.name} className="inputs-margin-myProf" readOnly />
      </div>

      <div>
        <label className="label-data-MyProfile">Презиме:</label>
        <br />
        <input type="text" name="surname" value={formData.surname} className="inputs-margin-myProf" readOnly />
      </div>

      <div>
        <label className="label-data-MyProfile">Адреса на живеење:</label>
        <br />
        <input type="text" name="address" value={formData.address} className="inputs-margin-myProf" readOnly />
      </div>

      <div>
        <label className="label-data-MyProfile">Телефон:</label>
        <br />
        <input type="text" name="phone" value={formData.phone} className="inputs-margin-myProf" readOnly />
      </div>

      <div>
        <label className="label-data-MyProfile">Email Адреса:</label>
        <br />
        <input type="text" name="email" value={formData.email} className="inputs-margin-myProf" readOnly />
      </div>
<div className='label-data-checkbox'>
<Link to="/">
     <GoldenButton buttonText={'Нарачај'}/>

     </Link>
     <Link to="/" className='otkazi-form'>Откажи</Link>
     </div>

      
    </div>

  );
};

export default FormToOrder;
