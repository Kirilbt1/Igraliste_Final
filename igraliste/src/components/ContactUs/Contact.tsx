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
    <div className='margin-bottom-contact'>
      <Carousel />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <HeadingStart text='Контакт' />
      <img src="https://picsum.photos/id/237/300/300" alt="" className='firstimg' />
      <div className="header-contact">Игралиште Дебар Маало</div>
      <div className="desc-contact">
        Откриј ги нашите останати модни парчиња и колекции кои ги немаме
        изложено на нашата страна!
      </div>
      <div className="address-contact">Костурски Херои бр.6/14 Дебар Маало, Скопје</div>
      <div className="contact-phone">
        <div className="telephone-contact">Телефон за контакт:</div>
        <div className="telephone-number-contact">+ 389 078 380 406</div>
      </div>
      <div className="">
        <div className="working-time-contact">Работно Време:</div>
        <div className="working-days-contact">Понеделник - Петок 12:00 - 19:00.</div>
        <div className="working-days-last-contact">Сабота 12:00 - 17:00</div>
      </div>
      <GoldenButton buttonText='Кон продавницата'buttonStyle={{margin: '0 0 0 110px'}}/>
    </div>
  )
}

export default Contact;
