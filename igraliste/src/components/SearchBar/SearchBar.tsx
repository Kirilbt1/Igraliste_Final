import React from 'react'
import "./SearchBar.css";

interface SeachProps{
  handleArrow:()=>void;
}

const SearchBar: React.FC<SeachProps> = ({ handleArrow }) => {
  return (
    <div className="search">
     
      <img
        src="../images/leftArrow.png"
        alt=""
        onClick={handleArrow}
      />
      <div className="input">
        <input type="text" placeholder="Пребарувај" />
        <img src="../images/LeftArrow.png"className='second-img' alt="" />
      </div>
    </div>
  );
};

export default SearchBar
