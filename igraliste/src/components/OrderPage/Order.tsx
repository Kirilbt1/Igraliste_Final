// OrderPage.tsx
import React, { useState } from 'react';
import CardItems from './CardItems';
import FavouriteItems from './FavouritesItems';
import Carousel from '../Carousel/Carousel';

import SixCardsPerPage from '../ProductList/SIxCardsPerPage';
import "./Order.css"


const Order: React.FC = () => {
  const [showCart, setShowCart] = useState(true);

  // Assume you have the cart items in local storage
  const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const storedFavourite=JSON.parse(localStorage.getItem('favorites') || '[]');
  const cartItemCount = storedCart.length;
  const favouriteItems=storedFavourite.length;

  
  const handleDeleteItem = (productId: string) => {
    //
    const cartItemsJSON = localStorage.getItem('cart');
    
    if (cartItemsJSON) {
      const cartItems: string[] = JSON.parse(cartItemsJSON);
      const updatedCart = cartItems.filter((item) => item !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    else{
    console.log("Not found item");
    }
  };

  return (
    <>
       <Carousel/>
    <div>
      {/* Togleri */}
      <div className='order-button-toglers'>
      <span className='order-button-toglers-margin' onClick={() => setShowCart(true)}>
      <img src="../images/Basket.png" alt="" className='margin-togglers-order'/>
       Кошничка  {cartItemCount > 0 && `(${cartItemCount})`}
      </span>
      <span  onClick={() => setShowCart(false)}> <img src="../images/HeartOne.png" alt="" className='margin-togglers-order' />Омилени{favouriteItems > 0 && `(${favouriteItems})`}</span>
      </div>
      {/* Render the selected component */}
      
      {showCart ? (
        <>
          <CardItems onDelete={handleDeleteItem} />
       
        </>
      ) : (
        <FavouriteItems />
      )}
     <h2>Други Парчиња:</h2>
      <SixCardsPerPage itemsPerPage={6}/>
    </div>
    </>
  );
};

export default Order;