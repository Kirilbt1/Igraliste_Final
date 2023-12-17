import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product, useProductContext } from '../Context/ProductContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import "./SixCardsPerPage.css"

interface ProductListProps {
  itemsPerPage: number;
}

const SixCardsPerPage: React.FC<ProductListProps> = ({ itemsPerPage }) => {
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
  }, [products, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="card-container">
            {filteredProducts.map((product) => (
              // Making clickable card
              <Link to={`/product-details/${product.id}`} key={product.id} className="card-link img-six">
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
  );
};

export default SixCardsPerPage;
