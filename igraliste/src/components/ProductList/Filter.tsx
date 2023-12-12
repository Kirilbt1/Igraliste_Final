// Filter.tsx
import React from 'react';

interface FilterProps {
  sortOption: string;
  onSortChange: (sortOption: string) => void;
}

const Filter: React.FC<FilterProps> = ({ sortOption, onSortChange }) => {
  return (
    <div>
      {/* Implement your filter UI here */}
      <label>Sort by:</label>
      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="latest">Latest</option>
      </select>
    </div>
  );
};

export default Filter;
