import React from 'react'
import { Link } from 'react-router-dom';
import "./Circle.css"
interface Circle{
  header:string;
desctiption:string;
customStyle?:React.CSSProperties;
}

const Circle = ({header,desctiption,customStyle}:Circle) => {
  return (
    <div className='circle' >
      <img
        className="dzvezda"
        src="../images/dzvezda.png"
        alt=""
      />
    
      <div className="circle-header">{header}</div>
      <div className="circle-description">{desctiption}</div>
      <img className="arrow" src="../images/GolemastelkaHome.png" alt="" />
    </div>
  )
}

export default Circle
