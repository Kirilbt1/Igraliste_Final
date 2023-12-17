// FavoritesItems.tsx
import React, { useEffect, useState } from 'react';
import { useProductContext, Product } from '../Context/ProductContext';
import "./Order.css"


const FavoritesItems: React.FC = () => {
  const { findProductById } = useProductContext();
  const [favoriteItems, setFavoriteItems] = useState<string[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load favorite items from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoriteItems(storedFavorites);

    // Fetch product details for each item in favorites
    const products: Product[] = storedFavorites.map((productId: string) => findProductById(productId)) as Product[];
    setFavoriteProducts(products.filter((product): product is Product => !!product));
  }, [findProductById]);

  return (
    <div  className='magin-left-right-card'>
      
      {favoriteProducts.map((product: Product) => (
        <div key={product.id}>
          <img src={product.image} className='image-cart-item'/>
          <p className='paragraph-card-item'>{product.name}</p>
          <p className='paragraph-card-item'>Price: {product.price} ден.</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesItems;
