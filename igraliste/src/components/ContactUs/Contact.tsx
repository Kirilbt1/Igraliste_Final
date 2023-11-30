import React from 'react'
import HeadingStart from '../ReusableComponents/HeadingStart';
import GoldenButton from '../ReusableComponents/GoldenButton';
import Carousel from '../Carousel/Carousel';


const Contact = () => {
  return (
    <div>
        <Carousel/>
   <HeadingStart text='Контакт'/>
   <img src="https://picsum.photos/200/300?grayscale" alt="" />
      <div className="header">Игралиште Дебар Маало</div>
      <div className="description">
        Откриј ги нашите останати модни парчиња и колекции кои ги немаме
        изложено на нашата страна!
      </div>
      <div className="address">Костурски Херои бр.6/14 Дебар Маало, Скопје</div>
      <div className="telephone-contact">
        <div className="telephone">Телефон за контакт:</div>
        <div className="telephone-number">+ 389 078 380 406</div>
      </div>
      <div className="working-time">
        <div className="working-time-header">Работно Време:</div>
        <div className="working-days">Понеделник - Петок 12:00 - 19:00.</div>
        <div className="working-days">Сабота 12:00 - 17:00</div>
      </div>
      <GoldenButton buttonText='Кон продавницата'/>
    </div>
  )
}

export default Contact;
