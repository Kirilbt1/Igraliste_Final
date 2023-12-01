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
        {icon&& <img src={icon} className='image'></img>}
     <p className='paragrapg-text'>{text}</p>
      </button>
    </div>
  )
}

export default SocialMediaBtn
