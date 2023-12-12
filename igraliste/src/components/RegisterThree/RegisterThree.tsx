import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./RegisterThree.css"

interface registrationFormData {
  profilePicture: string;
  address: string;
  mobileNumber: string;
  bio: string;
}

const RegisterThree: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<registrationFormData>({
    profilePicture: '',
    address: '',
    mobileNumber: '',
    bio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: imageUrl,
      }));
    }
  };

  const handleFinish = () => {
    // Save data to local storage
    localStorage.setItem('registrationFormData', JSON.stringify(formData));

    // Handle finish button click, e.g., navigate to the next page
    navigate("/"); // Change this to the desired route
  };

  return (
    <div className='backgroung-register-three'>
      <Link to="/">
      <img src="../images/Logo.png" alt="" className='logo-register-three'/>
      </Link>
      {/* Profile picture upload */}
      <div className='center-Image-Form'>
        {formData.profilePicture ? (
          <img src={formData.profilePicture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='imageRegisterThree'/>
        ) : (
          <div style={{ width: '100px', height: '100px', backgroundColor: '#ccc', borderRadius: '50%' }} />
        )}
        <input type="file" accept="image/*" className='centerPicture' onChange={handleFileChange} />
      </div>

      {/* Input fields for address, mobile number, and bio */}
      <div>
        <label htmlFor="address">Адреса::</label>
        <br />
        <input type="text" id="address" name="address" placeholder='Адреса' value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="mobileNumber">Телефонски Број:</label>
        <br />
        <input type="text" id="mobileNumber" name="mobileNumber" placeholder='Телефонски број' value={formData.mobileNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="bio">Биографија</label>
        <br />
        <input type="text" id="bio" name="bio" placeholder='Биографија' value={formData.bio} onChange={handleChange} />
      </div>

      {/* Action buttons */}
      <div className='flexbuttons'>
        <button onClick={handleFinish} className='Zavrsi'>Заврши</button>
        <Link to="/EditForm" className='Preskokni'> Прескокни</Link>
      </div>
    </div>
  );
};

export default RegisterThree;
