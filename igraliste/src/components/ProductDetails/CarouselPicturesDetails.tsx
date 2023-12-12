import React, { useState } from 'react'
import "./CarouselPicturesDetails.css"

interface CarouselWithPictures {
    productImages: string[];
}

const CarouselPicturesDetails = ({ productImages }: CarouselWithPictures) => {
    const [curent, setCurent] = useState(0);

    const goNext = () => {
        setCurent((prevSlide) => (prevSlide + 1) % productImages.length);
    }
    const prevSlide = () => {
        setCurent((prevSlide) => (prevSlide - 1 + productImages.length) % productImages.length)
    }

    return (
        <div className='carousel-images'>
            <div className='slider-image'>
            <img src={productImages[curent]} alt="" />
            </div>

            <img src="../images/homeStrelkaLeva.png" alt="" className='img-carousel' onClick={prevSlide} />
            <div className='image-wrapper-small'>
                {productImages.map((image, idx) => (
                    <img src={image}
                        key={idx}
                        onClick={() => setCurent(idx)} />
                ))}
            </div>
            <img src="../images/home-desna.png" alt="" className='img-carousel' onClick={goNext} />
        </div>
    )
}

export default CarouselPicturesDetails;
