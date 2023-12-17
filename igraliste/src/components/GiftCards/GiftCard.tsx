import React from 'react'
import "./Giftcards.css";
import ButtonsReusable from './ButtonsReusable';
import GiftReusable from './GiftReusable';
import Carousel from '../Carousel/Carousel';

const GiftCard = () => {
  return (
   
    <div className='width-full-gift'>
       <Carousel/>
    <h1 className='text-center-h1'>Gift Картички за подарок</h1>
     <div >
      <GiftReusable image='../images/Gift-1.png'/>
      <GiftReusable image='../images/Gift-2.png'/>
      <GiftReusable image='../images/Gift-3.png'/>
     </div>
      <p className='GiftCards'>Одбери цена на подарок картичка:</p>
      <ButtonsReusable price='500 denari'/>
      <ButtonsReusable price='1000 денари'/>
      <ButtonsReusable price='2000 денари'/>
      <ButtonsReusable price='2500 денари'/>
      <ButtonsReusable price='4000 денари'/>


    </div>
  )
}

export default GiftCard;
