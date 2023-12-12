import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import Carousel from '../Carousel/Carousel';
import Breadcrumbs from '../ReusableComponents/Breadcrums';
import CarouselPicturesDetails from './CarouselPicturesDetails';
import "./ProductDetails.css"
import Quantitu from './Quantitu';
import ToglersContainer from './ToglersContainer';
import SixCardsPerPage from '../ProductList/SIxCardsPerPage';


const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { findProductById, loading, products } = useProductContext();

  // Console testing 
  // console.log('productId:', productId);
  // console.log('products:', products);

  // Checking if undifined
  if (!productId) {
    return <p>Invalid product ID</p>;
  }

  // Find the product by ID
  const product = findProductById(productId);

  console.log('product:', product);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found for ID: {productId}</p>;
  }

  const breadcrumbs = [
    { path: "/", name: "Почетна" },
    { path: "/product-list", name: "Vintage Облека" },
    { path: "/product-list", name: "Палта и јакни" },
  ];
  return (
    <div className='product-details'>
      <Carousel/>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      
      <h2 className='Product-header'>{product.name}</h2>
     <img src={product.image} alt="" />
     {/* <CarouselPicturesDetails productImages={product.productImages}/> */}
     <p className='product-price-details'>{product.price} ден.</p>
     <p>{product.description} </p>
      <Quantitu/>
      <h1>DODADI VO KOSNICKA TREBA DA SREDAM</h1>
      <div className='velicina-flex'>
      <p>Величина: {product.size}</p>
      </div>
      <p>{product.maintenance}</p>
      <hr />
      <p>Боја:{product.color}</p>
      <h3>Материјал:</h3>
      <p>{product.material}</p>
      <div>
      <h3>Состојба:</h3>
      <p>{product.condition}</p>
      </div>
      <h3>Насоки за одржување:</h3>
      <p>{product.maintenance}</p>
      <hr />
  <ToglersContainer/>
  <h3>Други Парчиња</h3>
  <SixCardsPerPage itemsPerPage={6}/>
    </div>
  );
};

export default ProductDetails;
