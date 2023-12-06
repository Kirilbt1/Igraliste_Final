import React, { useContext } from 'react';
import { ProductContext, useProductContext } from '../Context/ProductContext';

const Product: React.FC = () => {

  const products = useProductContext();
// console.log("Product Listing", products);

  return (
    <div>
   
      <div>
        {products.map(product => (
         <div key={product.id}>
         <ul>
      
          {product.images}
          {product.name}
         
          </ul>
         </div>
    
        ))}
      </div>
    </div>
  );
};

export default Product;



