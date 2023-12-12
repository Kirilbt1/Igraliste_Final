import { useState } from "react";
import "./ToglersContainer.css"

interface ExpandingBoxProps {
  boxIcon: string;
  boxHeader: string;
}

const ToglerBox = ({ boxIcon, boxHeader }: ExpandingBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div className="expanding-box">
      <div className="toggle-btn" >
        <img src={boxIcon} alt="" />
        <span className="box-header">{boxHeader}</span>
        <img
          className="open-close"
          src={isExpanded ? "../images/PlusBox.png" : "../images/PlusBox.png"}
          alt=""
          onClick={handleToggle}
        />
      </div>
      {isExpanded && (
        <div>
          <div className="expanded-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </div>
        </div>
      )}
    </div>
  );
};

export default ToglerBox;

