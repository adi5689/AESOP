import React, { useRef } from 'react';
import '../../css/m1.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css/m3.css';
import LFC1 from '../../assets/LFC1.png';
import LFC2 from '../../assets/LFC2.png';
import LFC3 from '../../assets/LFC3.png';
import LFC4 from '../../assets/LFC4.png';
import LFC5 from '../../assets/LFC5.png';
import LFC6 from '../../assets/LFC6.png';
import LFC7 from '../../assets/LFC7.png';
import LFC8 from '../../assets/LFC8.png';

const carouselData = [
  {
    title: 'Lucent Facial Concentrate',
    description: 'A Vitamin C-rich layering serum',
    image: LFC1,
  },
  {
    title: 'Purifying Facial Cream Cleanser',
    description: 'A daily cream cleanser for dry skin',
    image: LFC2,
  },
  {
    title: 'Camellia Nut Facial Hydrating Cream',
    description: 'For normal, dry or sensitive skin',
    image: LFC3,
  },
  {
    title: 'Parsley Seed Anti-Oxident Eye Cream',
    description: 'Nourishes delicate skin around eyes',
    image: LFC4,
  },
  {
    title: 'B Triple C Facial Balancing Gel',
    description: 'Anti-oxident gel infused with Vitamin B and C',
    image: LFC5,
  },
  {
    title: 'Mandarin Facial Hydrating Cream',
    description: 'Rapidly absorbed, lightly hydrating',
    image: LFC6,
  },
  {
    title: 'Parsley Seed Anti-Oxident Intense Serum',
    description: 'A hydrating serum to bolster skin',
    image: LFC7,
  },
  {
    title: 'Camellia Nut Facial Hydrating Cream',
    description: 'For normal, dry or sensitive skin',
    image: LFC8,
  },
];

const M3 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
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
    <div className="carousel-container-2">
      <div className="left-content-2">
        <h3>For the skin</h3>
        <h2>An expression of care</h2>
        <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
        <p>See all Skin Care &rarr;</p>
        {/* <div className="carousel-buttons">
        </div> */}
      </div>
      <div className="right-content-2">
        <button onClick={goToPrev} className="prev-button-2">
        &lt;
        </button>
        <div className="slick-list-2">
            <Slider {...settings} ref={sliderRef}>
            {carouselData.map((item, index) => (
                <div key={index} className="carousel-slide-2">
                <img
                    src={item.image}
                    alt={item.title}
                />
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                </div>
            ))}
            </Slider>
        </div>
        <button onClick={goToNext} className="next-button-2">
        &#62;
        </button>
      </div>
      
    </div>
  );
};

export default M3;
