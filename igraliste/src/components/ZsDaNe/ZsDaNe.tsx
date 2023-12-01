import React from 'react'
import Carousel from '../Carousel/Carousel';
import HeadingStart from '../ReusableComponents/HeadingStart';

import Breadcrumbs from '../ReusableComponents/Breadcrums';
const breadcrumbs = [
  { path: "/", name: "Почетна" },

  { path: "/zsdane", name: "Зш да не" },
];
const ZsDaNe = () => {
  return (
    <div>
     <Carousel/>
     <HeadingStart text='Зш Да Не'/>
     <Breadcrumbs breadcrumbs={breadcrumbs}/>
    </div>
  )
}

export default ZsDaNe;
