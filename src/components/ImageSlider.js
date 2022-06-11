import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const ImageSlider = ({ slides },item ) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  return (
    <section className='slider'>
      <IoIosArrowBack className='left-arrow' onClick={prevSlide} />
      <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              // <img src={slide.image} alt='travel image' className='image' />

              <div className="card">
              <div className="c-card">
                <img src={slide.image} className="img_props" />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <h5 className="card-text"></h5>
                  <p className="card-text"></p><br/>
        
                  {/* <button classname="cart-btn " >Add To Cart</button> 
                  <button classname="btn-buy">Buy</button> */}
                  {/* <Demo product={product} /> */}
        
                  {/* <Button onClick={openModal}>I'm a modal</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
                <GlobalStyle /> */}
                </div>
              </div>
            </div>

            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;