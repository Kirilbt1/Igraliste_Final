import React from 'react'
interface QaProp{
    question:string;
    answer:string;

}

const Questions = ({question,answer}:QaProp) => {
  return (
    <div>
      <div>{question}</div>
    <div>{answer}</div>
    </div>
  )
}

export default Questions
