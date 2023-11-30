import React from 'react'

interface StoryWorkProp{
image:string;
head:string;
paragraph:string;
}

const StoryWork = ({image,head,paragraph}:StoryWorkProp) => {
  return (
    <div>
 
    <img src={image} alt="" />
    <div>{head}</div>
    <div>{paragraph}</div>
    </div>
  )
}

export default StoryWork
