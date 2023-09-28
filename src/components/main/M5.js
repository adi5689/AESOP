import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import L1 from '../../assets/L1.png';
import L2 from '../../assets/L2.png';
import L3 from '../../assets/L3.png';

import '../../css/m6.css';

const carouselData = [
  {
    title: 'Aesop Fashion Walk',
    // description: 'A botanical bathroom deodoriser',
    image: L1,
  },
  {
    title: 'Aesop MOKO',
    // description: 'Cardamom, Mimosa, Tabacco',
    image: L2,
  },
  {
    title: 'Aesop IFC Mall',
    // description: 'A sensuous blend of leather, smoke and wood',
    image: L3,
  },
  
];

const M5 = () => {
  const sliderRef = useRef(null);

  

  const settings = {
    dots: false, // Hide the default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="carousel-container-3">
      <div className="left-content-3">
        {/* <h3>For the home</h3> */}
        <h2>Store Locator</h2>
        <p>Our consultants are available to host you in store and provide tailored guidance on gift purchases.</p>
       <button className='left-btn'>Find a nearby store<span> &rarr;</span></button>
        {/* <div className="carousel-buttons">
        </div> */}
      </div>
      <div className="right-content-3">
        <button onClick={goToPrev} className="prev-button-3">
        &lt;
        </button>
        <div className="slick-list-3">
            <Slider {...settings} ref={sliderRef}>
            {carouselData.map((item, index) => (
                <div key={index} className="carousel-slide-3">
                <img
                    src={item.image}
                    alt={item.title}
                />
                <h2>{item.title}</h2>
                {/* <h3>{item.description}</h3> */}
                </div>
            ))}
            </Slider>
        </div>
        <button onClick={goToNext} className="next-button-3">
        &#62;
        </button>
      </div>
      
    </div>
  );
};

export default M5;
