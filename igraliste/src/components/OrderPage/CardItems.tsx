// CartDetails.tsx
import React, { useEffect, useState } from 'react';
import { useProductContext, Product } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import ToglersContainer from '../ProductDetails/ToglersContainer';
import "./Order.css"
import GoldenButton from '../ReusableComponents/GoldenButton';

interface CartDetailsProps {
  onDelete: (productId: string) => void;
}

const CardItems: React.FC<CartDetailsProps> = ({ onDelete }) => {
  const { findProductById } = useProductContext();
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);

    // Fetch product details for each item in the cart
    const products: Product[] = storedCart.map((productId: string) => findProductById(productId)) as Product[];
    setCartProducts(products.filter((product): product is Product => !!product));
  }, [findProductById]);

  const calculateTotalPrice = (): number => {
    return cartProducts.reduce((total, product) => total + parseFloat(product.price), 0);
  };

  const handleDeleteAllItems = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    console.log('All cards are deleted');
  };

  return (
    <div className='magin-left-right-card'>
     
      {cartProducts.map((product: Product) => (
        <div key={product.id}>
          <img src={product.image} className='image-cart-item' />
          <p className='paragraph-card-item'>{product.name}</p>
          <p className='paragraph-card-item'>Price: {product.price} ден.</p>
        
         
        </div>
      ))}
     
      {cartProducts.map((product: Product, ) => (
        <div key={product.id}>
          <div className='flex-price-to-order'>
          <p>{product.name}</p>
          <p> {product.price} ден.</p>

         
          </div>
         
        </div>
      ))}
      <div className='flex-price-to-order'>
      <p>Delivery: </p>
      <p>150 ден.</p>
      </div>
      {/* <p>Discount: 0 ден.</p> */}
    <hr className='horisontal-cardItems'/>
<div className='flex-price-to-order'>
      <p className='total-price-card'>Вкупно: </p>
      <p className='total-price-card'>{calculateTotalPrice() + 150} ден.</p>
      </div>
      <hr />
      <Link to="/form-to-order">
      <GoldenButton buttonText='ПРОДОЛЖИ'/>
    </Link>
    <span  onClick={handleDeleteAllItems}><img src="../images/Delete-korpa.png" alt="" className='korpa'/></span>
     <ToglersContainer />
    </div>
  );
};

export default CardItems;
