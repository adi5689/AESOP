import React, { useRef } from 'react';
import '../../css/m1.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import S2 from '../../assets/s2(1).png';
import S1 from '../../assets/s1(1).png';
import S3 from '../../assets/s3(1).png';

const carouselData = [
  {
    title: 'Nurture Bar Soap',
    description: 'Offers a mild yet effective cleanse',
    image: S1,
    // link: '/hk/en/p/body-hand/body/nurture-bar-soap/',
  },
  {
    title: 'Polish Bar Soap',
    description: 'Thoroughly cleanses and exfoliates skin',
    image: S2,
  },
  {
    title: 'Refresh Bar Soap',
    description: 'Offers a thorough and enlivening cleanse',
    image: S3,
    // link: '/hk/en/p/body-hand/body/refresh-bar-soap/',
  },
];

const M1 = () => {
  const sliderRef = useRef(null);
  

  const settings = {
    dots: true,
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
    <div className="carousel-container">
      <div className="left-content">
        <h3>For the body</h3>
        <h2>An expression of care</h2>
        <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
        <p>See all Body Care &rarr;</p>
        {/* <div className="carousel-buttons">
        </div> */}
      </div>
      <div className="right-content">
        <button onClick={goToPrev} className="prev-button">
        &lt;
        </button>
        <div className="slick-list">
            <Slider {...settings} ref={sliderRef}>
            {carouselData.map((item, index) => (
                <div key={index} className="carousel-slide">
                <img
                    src={item.image}
                    alt={item.title}
                />
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                {/* <a href={item.link}>Learn More</a> */}
                </div>
            ))}
            </Slider>
        </div>
        <button onClick={goToNext} className="next-button">
        &#62;
        </button>
      </div>
      
    </div>
  );
};

export default M1;

