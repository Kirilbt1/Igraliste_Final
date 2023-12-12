import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Create an array of page numbers from 1 to totalPages
  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      {/* Implement your pagination UI here */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
     
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
<path d="M5.61445 2.77332L5.61429 2.77348L0.530399 7.84228C0.530365 7.84232 0.530332 7.84235 0.530298 7.84239C0.483749 7.88896 0.454657 7.93546 0.438308 7.98161L0.438047 7.98234C0.419088 8.035 0.409026 8.09287 0.409026 8.15708C0.409026 8.2213 0.419088 8.27916 0.438048 8.33183L0.438306 8.33255C0.454669 8.37874 0.483792 8.42528 0.530399 8.47188L5.61445 13.5559C5.72485 13.6663 5.86129 13.7226 6.03485 13.7226C6.20524 13.7226 6.3477 13.6635 6.47034 13.5408C6.59458 13.4166 6.65206 13.2786 6.65206 13.1204C6.65206 12.9623 6.59458 12.8243 6.47034 12.7L2.035 8.2647L1.92738 8.15708L2.035 8.04947L6.47034 3.61412C6.58153 3.50294 6.63697 3.36873 6.63697 3.20157C6.63697 3.03705 6.57865 2.89672 6.45526 2.77332C6.33101 2.64908 6.193 2.5916 6.03485 2.5916C5.87671 2.5916 5.73869 2.64908 5.61445 2.77332Z" fill="#232221" stroke="white" stroke-width="0.30438"/>
</svg>
      </button>

      {/* Map over each page and render a button */}
      {pagesArray.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={page === currentPage ? 'active' : ''}>
          {page}
        </button>
      ))}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {/* <img src="right-arrow-image.png" alt="Right Arrow" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
<path d="M9.38555 13.4142L9.38571 13.414L14.4696 8.34522C14.4696 8.34518 14.4697 8.34515 14.4697 8.34511C14.5163 8.29854 14.5453 8.25204 14.5617 8.20589L14.562 8.20516C14.5809 8.1525 14.591 8.09463 14.591 8.03042C14.591 7.9662 14.5809 7.90834 14.562 7.85567L14.5617 7.85495C14.5453 7.80876 14.5162 7.76222 14.4696 7.71562L9.38555 2.63157C9.27515 2.52117 9.13871 2.46493 8.96515 2.46493C8.79476 2.46493 8.6523 2.52401 8.52966 2.64665C8.40542 2.77089 8.34794 2.90891 8.34794 3.06705C8.34794 3.2252 8.40542 3.36321 8.52966 3.48746L12.965 7.9228L13.0726 8.03042L12.965 8.13803L8.52966 12.5734C8.41847 12.6846 8.36303 12.8188 8.36303 12.9859C8.36303 13.1505 8.42135 13.2908 8.54474 13.4142C8.66899 13.5384 8.807 13.5959 8.96515 13.5959C9.12329 13.5959 9.26131 13.5384 9.38555 13.4142Z" fill="#232221" stroke="white" stroke-width="0.30438"/>
</svg>
      </button>
    </div>
  );
};

export default Pagination;
