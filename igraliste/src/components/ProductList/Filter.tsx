
import React from 'react';
import "./Filters.css"
interface FilterProps {
  sortOption: string;
  onSortChange: (sortOption: string) => void;
}

const Filter: React.FC<FilterProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className='filter-head'>
      <button className='button-lupa-filter'>
      <img src="../images/Lupa.png" alt=""  className='img-lupa-filter'/>
      </button>
     
      <div>
      <label className='filter-najnovo'>Поредени Според:</label>
      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)} className='select-filter'>
        <option value="newest">Најново</option>
        <option value="latest">Најстаро</option>
      </select>
      </div>
    </div>
  );
};

export default Filter;
