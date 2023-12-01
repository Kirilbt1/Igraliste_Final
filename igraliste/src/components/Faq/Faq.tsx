import React from 'react'
import Carousel from '../Carousel/Carousel'
import HeadingStart from '../ReusableComponents/HeadingStart'
import Questions from './Questions'
import Breadcrumbs from '../ReusableComponents/Breadcrums'
import "./Faq.css";



const Faq = () => {

  const faq=[
    {
question:"Ова е примерок за прашања кои би биле на страната?",
answer:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question:"Ова е примерок за прашања кои би биле на страната?",
      answer:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question:"Ова е примерок за прашања кои би биле на страната?",
      answer:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      question:"Ова е примерок за прашања кои би биле на страната?",
      answer:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
  const breadcrumbs = [
    { path: "/", name: "Почетна" },
    { path: "/Faq", name: "FAQ" },
  ];
  return (
    <>
    <Carousel/>
      <HeadingStart text='FAQ'/>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
    <div className='faq'>
      
      <div className='questions-faq'>
      {faq.map((q, index) => (
          <Questions
            key={index}
            question={`${index + 1} ${q.question} `}
            answer={q.answer}
            
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Faq
