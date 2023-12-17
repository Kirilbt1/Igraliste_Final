// ProductCard.tsx
import React from 'react';
import { Product } from '../Context/ProductContext';
import "./ProductCard.css"
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='product-container-all'>
      <img src={product.image} alt="" className='productImage' />
      <h3 className='productName'>{product.name}</h3>
    <p className='productPrice'>{product.price}</p>

    </div>
  );
};

export default ProductCard;
