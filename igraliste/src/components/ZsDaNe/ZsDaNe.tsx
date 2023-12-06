import React from 'react'
import Carousel from '../Carousel/Carousel';
import HeadingStart from '../ReusableComponents/HeadingStart';

import Breadcrumbs from '../ReusableComponents/Breadcrums';
import { useProductContext } from '../Context/ProductContext';
const breadcrumbs = [
  { path: "/", name: "Почетна" },

  { path: "/zsdane", name: "Зш да не" },
];
const ZsDaNe = () => {
  const products=useProductContext()
  return (
    <div>
      <Carousel />
      <HeadingStart text='Зш Да Не' />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <img src="../images/zshdane1.png" alt="" />
        <p> Концептот на @zshdane_ се базира на неколку прашања:</p>
        <ul>
          <li>Дали постои простор за етикетирања и табу во овој безобразно неетички свет?</li>
          <li>Зошто фолирањето култура е поприфатено од искрениот отпор?</li>
<li>Дали треба да се срамиме од сопственото само за друг да биде мирен?</li>
<li>Дали ќе ни текне?</li>
        </ul>
        <p>Зачувај го слободниот дух и биди тоа што си с е к о г а ш .</p>
        <p>Погледнете ги производите на Зш да не кои ги нудиме во Игралиште. Имаме доста голем избор на Pussy привезоци кои се кул и ултра феминистички, а.к.а. grl pwr.
        </p>
      </div>
      <div>
        <h1>Парчиња од брендот</h1>
        {products.map(product => (
         <div key={product.id}>
         <ul>
          <img src={product.images} alt="" />
          <p>{product.name}</p>
          <p>{product.price}</p>

          </ul>
         </div>
    
        ))}
      </div>
    </div>
  )
}

export default ZsDaNe;
