import React from 'react'
import "./Questions.css";

interface QaProp{
    question:string;
    answer:string;

}

const Questions = ({question,answer}:QaProp) => {
  return (
    <div className=''>
      <div className='question'>{question}</div>
    <div className='answer'>{answer}</div>
    </div>
  )
}

export default Questions
