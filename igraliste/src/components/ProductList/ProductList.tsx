

// export default ProductList;

// ProductList.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product, useProductContext } from '../Context/ProductContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Filter from './Filter';
import Breadcrumbs from '../ReusableComponents/Breadcrums';
// import "./ProductList.css"

interface ProductListProps {
  itemsPerPage: number;

}

const ProductList: React.FC<ProductListProps> = ({ itemsPerPage}) => {
  const { products, loading, sortOption, setSortOption } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let sortedProducts = [...(products || [])];
    if (sortOption === 'newest') {
      sortedProducts = sortedProducts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortOption === 'latest') {
      sortedProducts = sortedProducts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    setFilteredProducts(paginatedProducts);
  }, [products, sortOption, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const breadcrumbs = [
    { path: "/", name: "Почетна" },
    { path: "/product-list", name: "Сите" },
  ];
  
  return (
    <>
    <Breadcrumbs breadcrumbs={breadcrumbs}/>
    <Filter sortOption={sortOption} onSortChange={setSortOption} />

    <div className=''>
    
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <div>
          {filteredProducts.map((product) => (
            // Making clickable card
            <Link to={`/product-details/${product.id}`} key={product.id} className=''>
              <ProductCard product={product} />
            </Link>
          ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((products?.length || 1) / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
    </>
  );
};

export default ProductList;

