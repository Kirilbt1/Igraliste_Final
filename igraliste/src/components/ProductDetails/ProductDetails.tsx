import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext, Product } from '../Context/ProductContext';
import Carousel from '../Carousel/Carousel';
import Breadcrumbs from '../ReusableComponents/Breadcrums';
import "./ProductDetails.css";
import Quantitu from './Quantitu';
import ToglersContainer from './ToglersContainer';
import SixCardsPerPage from '../ProductList/SIxCardsPerPage';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { findProductById, loading } = useProductContext();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
const [lookDimensions,setLookDimensions]=useState(false);
  const currentProductId = productId || '';
  const product = findProductById(currentProductId);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setFavorites(storedFavorites);
    setCart(storedCart);
  }, []);

  const toggleFavorite = () => {
    const updatedFavorites = favorites.includes(currentProductId)
      ? favorites.filter((id) => id !== currentProductId)
      : [...favorites, currentProductId];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const toggleCart = () => {
    const updatedCart = cart.includes(currentProductId)
      ? cart.filter((id) => id !== currentProductId)
      : [...cart, currentProductId];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [favorites, cart]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found for ID: {productId}</p>;
  }

  // Toggler for look dimensions 
  
  
    const toggleText = () => {
      setLookDimensions(!lookDimensions);
    };
  const breadcrumbs = [
    { path: "/", name: "Почетна" },
    { path: "/product-list", name: "Vintage Облека" },
    { path: "/product-list", name: "Палта и јакни" },
  ];

  return (
    <>
      <Carousel />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='product-details'>
        <h2 className='Product-header'>{product.name}</h2>
        <img src={product.image} alt="" className='product-detail-img' />
        <p className='product-price-details'>{product.price} ден.</p>
        <Link to='/Order'>
        <img src='../images/cart.png' className='korpa-fixed-card'></img>
        </Link>
        <Link to='/Order'>
        <img src='../images/HeartOne.png' className='korpa-fixed-srce'></img>
        </Link>
       
        <p className='product-desc-details'>{product.description} </p>
        <Quantitu />

        <button className='button-details-add' onClick={toggleCart}>
          {cart.includes(currentProductId) ? 'Одстрани од кошничка' : 'Додади во кошничка'}
        </button>

        <span onClick={toggleFavorite} className='favourites-details'>
          {favorites.includes(currentProductId) ? (
            <img src="../images/HeartOne.png" alt="Remove from Favorites"  className='bg-heart-color-details'/>
          ) : (
            <img src="../images/HeartOne.png" alt="Add to Favorites"  className='heart-margin-details'/>
          )}
        </span>
        <hr  className='horisontall-rule-detais'/>
        <div className='velicina-flex'>
          <p className='size-details'>Величина:  </p>
          <p className='size-details-size'>{product.size  }</p>
        </div>
        <p className='meintance-details'>{product.maintenance}</p>
      
      <div>
      {lookDimensions && (
        <p>
          Димензии 20x45
        </p>
      )}
      <span className='look-dimensions' onClick={toggleText}>
        {lookDimensions ? 'Тргни ги димензиите' : 'Види ги димензиите'}
      </span>
    </div>
  
        <hr />
        <p className='details-color'>Боја:{product.color}</p>
        <h3>Материјал:</h3>
        <p>{product.material}</p>
        <div>
          <h3>Состојба:</h3>
          <p>{product.condition}</p>
        </div>
        <h3>Насоки за одржување:</h3>
        <p>{product.maintenance}</p>
        <hr />
        <ToglersContainer />
        <h3>Други Парчиња</h3>
       
      </div>
      <SixCardsPerPage itemsPerPage={6} />
    </>
  );
};

export default ProductDetails;
