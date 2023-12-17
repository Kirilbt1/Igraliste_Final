import React from 'react';
import "./Pagination.css"
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Number from 1 to ... pages
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='pagination-implementation'>
    
      <span className='no-decoration-filter' onClick={() => onPageChange(currentPage - 1)}>

      <img src="../images/homeStrelkaLeva.png" alt="" className='pag-img'/>
      </span>

      
      {pagesArray.map((page) => (
        <span  key={page} onClick={() => onPageChange(page)} className={page === currentPage ? 'active' : 'all-others'} >
          {page}
        </span>
      ))}

      <span className='no-decoration-filter' onClick={() => onPageChange(currentPage + 1)} >
       
        <img src="../images/home-desna.png" alt="" className='pag-img'/>
      </span>
    </div>
  );
};

export default Pagination;
