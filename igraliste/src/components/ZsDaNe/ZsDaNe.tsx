import React from 'react'
import Carousel from '../Carousel/Carousel';
import HeadingStart from '../ReusableComponents/HeadingStart';

import Breadcrumbs from '../ReusableComponents/Breadcrums';
import SixCardsPerPage from '../ProductList/SIxCardsPerPage';
// import { useProductContext } from '../Context/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css';
const breadcrumbs = [
  { path: "/", name: "Почетна" },

  { path: "/zsdane", name: "Зш да не" },
];
const ZsDaNe = () => {
  // const products=useProductContext()
  return (
    <div>
      <Carousel />
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <HeadingStart text='Зш Да Не' />

      
        <img src="../images/zshdane1.png" alt=""className='img-zs-da-ne' />
        <div className='container class-text'>
        <p className='paragraph-concept'> Концептот на @zshdane_ се базира на неколку прашања:</p>
        <ul className=''>
          <li>Дали постои простор за етикетирања и табу во овој безобразно неетички свет?</li>
          <li>Зошто фолирањето култура е поприфатено од искрениот отпор?</li>
          <li>Дали треба да се срамиме од сопственото само за друг да биде мирен?</li>
          <li>Дали ќе ни текне?</li>
        </ul>
        <p>Зачувај го слободниот дух и биди тоа што си  с е к о г а ш .</p>
        <p>Погледнете ги производите на Зш да не кои ги  нудиме во Игралиште. Имаме доста голем  избор на Pussy привезоци кои се кул и ултра  феминистички, а.к.а. grl pwr.
        </p>
      </div>
      <div>
        <h1>Парчиња од брендот:</h1>
        <SixCardsPerPage itemsPerPage={6} />
      </div>
    </div>
  )
}

export default ZsDaNe;
