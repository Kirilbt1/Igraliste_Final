import React from 'react'

interface Circle{
  header:string;
paragraph:string;
}

const Circle = ({header,paragraph}:Circle) => {
  return (
    <div className='krug'>
      <img src="../images/dzvezda.png" alt="" />
      <p>{header}</p>
      <p>{paragraph}</p>
      <img src="../images/GolemastrelkaHome.png" alt="" />
    </div>
  )
}

export default Circle
