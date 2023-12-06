import React from 'react'
import "./ButtonReusable.css";

interface Props{
    price:string;
}

const ButtonsReusable = ({price}:Props) => {
  return (
    <div className='buttonStule'>
      <button className='button-stil'>{price}</button>
    </div>
  )
}

export default ButtonsReusable;
