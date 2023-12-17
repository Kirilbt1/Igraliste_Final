import { useState } from "react";
import "./Circle.css";

interface CircleProps {
  circleHeading: string;
  circleDescription: string;
  customCircleStyle?: React.CSSProperties; 
}

const Circle = ({
  circleHeading,
  circleDescription,

  
  
}: CircleProps) => {
  

  return (
    <div>
   <img src="../images/dzvezda.png" alt="" />
      <div className="circle-heading">{circleHeading}</div>
      <div className="circle-description">{circleDescription}</div>
      <img className="arrow" src="pictures/arrow.png" alt="" />
   <img src="../images/dzvezda.png" alt="" />

    </div>
  );
};

export default Circle;

