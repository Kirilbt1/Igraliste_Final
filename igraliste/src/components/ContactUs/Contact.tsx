import React from 'react'
import HeadingStart from '../ReusableComponents/HeadingStart';
import GoldenButton from '../ReusableComponents/GoldenButton';
import Carousel from '../Carousel/Carousel';
import Breadcrumbs from '../ReusableComponents/Breadcrums';
import "./Contact.css";


const Contact = () => {
  const breadcrumbs = [
    { path: "/", name: "Почетна" },

    { path: "/Contact", name: "Контакт" },
  ];
  return (
    <div>
      <Carousel />
      <HeadingStart text='Контакт' />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <img src="https://picsum.photos/350/300?grayscale" alt="" className='firstimg' />
      <div className="header">Игралиште Дебар Маало</div>
      <div className="desc">
        Откриј ги нашите останати модни парчиња и колекции кои ги немаме
        изложено на нашата страна!
      </div>
      <div className="address">Костурски Херои бр.6/14 Дебар Маало, Скопје</div>
      <div className="contact-phone">
        <div className="telephone">Телефон за контакт:</div>
        <div className="telephone-number">+ 389 078 380 406</div>
      </div>
      <div className="">
        <div className="working-time">Работно Време:</div>
        <div className="working-days">Понеделник - Петок 12:00 - 19:00.</div>
        <div className="working-days-last">Сабота 12:00 - 17:00</div>
      </div>
      <GoldenButton buttonText='Кон продавницата' />
    </div>
  )
}

export default Contact;
