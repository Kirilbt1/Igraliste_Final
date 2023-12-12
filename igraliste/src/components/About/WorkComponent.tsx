// WorkComponent.tsx
import React from 'react';
import "./StoryWork.css"
interface WorkComponentProps {
  image: string;
  head: string;
  paragraph: string;
}

const WorkComponent: React.FC<WorkComponentProps> = ({ image, head, paragraph }) => {
  return (
    <div>
       <img src={image} alt="" className='aboutPic'/>
      <div className='header-about'>{head}</div>
      <div className='text-some-about'>{paragraph}</div>
    </div>
  );
};

export default WorkComponent;
