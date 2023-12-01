import React, { useState } from 'react'
import "./Circle.css";

interface Circle{
  textHeading:string;
  desc:string;
  firstStyle:React.CSSProperties;
  newStyle:React.CSSProperties;
  handleCircle:()=>void;
}

const Circle = ({textHeading,desc,firstStyle,newStyle,handleCircle}:Circle) => {
  const [isClickedCircle,setIsclickedCircle]=useState(false)
  const handleClickCircle=()=>{
    console.log("Clicked circle");
  }

  return (
    <div></div>
  )}
export default Circle;
