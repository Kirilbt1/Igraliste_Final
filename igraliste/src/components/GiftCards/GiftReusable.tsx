import React from 'react'
import "./Giftcards.css"
interface GiftCardProps {
  // title: string;
  image: string;
  // style:React.CSSProperties
}
const GiftReusable = ({ image }: GiftCardProps) => {

  return (
    <div className='pictureSome'>
      <div className='gift-picture'>
        <img src={image} alt="" className='img-gift' />
      </div>
    </div>
  )
}

export default GiftReusable
