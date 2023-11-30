import React, { useState } from 'react'

interface Props{
header:string;
desc:string;
style:string;
circle:React.CSSProperties;
clickedCircle:React.CSSProperties;
onclick?:()=>void;
}



const Circle = ({
  header,
  desc,
  style,
  circle,
  clickedCircle,
  onclick,}:Props) => {

    const [clickedState,setClickedState]=useState(false);

const handleIsClicked=()=>{
  setClickedState(!clickedState);
}


  return (
    <div>
      
    </div>
  )
}

export default Circle;
