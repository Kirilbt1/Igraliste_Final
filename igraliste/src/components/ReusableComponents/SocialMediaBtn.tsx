import React from 'react'
import "./SocialMediaBtn.css";

interface Props{
    icon?:string;
    text:string;
}
const SocialMediaBtn = ({icon,text}:Props) => {
  return (
    <div>
      <button className='social-btn'>
        {icon&& <img src={icon} className='image-socialMedia'></img>}
     <p className='paragrapg-text-register-one'>{text}</p>
      </button>
    </div>
  )
}

export default SocialMediaBtn
