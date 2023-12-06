import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./RegisterThree.css"
interface RegistrationFormData {
  profilePicture: string;
  address: string;
  mobileNumber: string;
  bio: string;
}

const RegisterThree: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    profilePicture: '', // Placeholder for image to add
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
    console.log('Registration finished:', formData);
  };

  // const handleSkip = () => {
    // Handle skip button click, 
  //   console.log("HandleClick");
    
  // };

  return (
    <div className='backgroung'>
      {/* Profile picture upload */}
      <div className='center-Image-Form'>
        {formData.profilePicture ? (
          <img src={formData.profilePicture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='marginTop'/>
        ) : (
          <div style={{ width: '100px', height: '100px', backgroundColor: '#ccc', borderRadius: '50%' }} />
        )}
        <input type="file" accept="image/*"className='centerPicture' onChange={handleFileChange} />
        
      </div>

      {/* Input fields for address, mobile number, and bio */}
      <div>
        <label htmlFor="address">Адреса::</label>
        <input type="text" id="address" name="address"placeholder='example@example.com' value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="mobileNumber">Телефонски Број:</label>
        <input type="text" id="mobileNumber" name="mobileNumber"placeholder='example@example.com'  value={formData.mobileNumber} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="bio">Биографија</label>
        {/* <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} />
         */}
         <input type="bio" id="bio" name="bio" value={formData.bio}placeholder='example@example.com'  onChange={handleChange} />
      </div>

      {/* Action buttons */}
      <div className='flexbuttons'>
        <button onClick={handleFinish} className='Zavrsi'>Заврши</button>
        {/* <button onClick={handleSkip} className='Preskokni'>Прескокни</button> */}
        <Link to="/EditForm" className='Preskokni'> Прескокни</Link>
      </div>
    </div>
  );
};

export default RegisterThree;
