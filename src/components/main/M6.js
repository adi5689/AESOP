import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LPG1 from '../../assets/LPG1.png';
import LPG2 from '../../assets/LPG2.png';
import LPG3 from '../../assets/LPG3.png';
import LPG4 from '../../assets/LPG4.png';
import LPG5 from '../../assets/LPG5.webp';
import LPG6 from '../../assets/LPG6.png';
import LPG7 from '../../assets/LPG7.png';
import LPG8 from '../../assets/LPG8.png';
import '../../css/m6.css';

const carouselData = [
  {
    title: 'Post-Poo Drops',
    description: 'A botanical bathroom deodoriser',
    image: LPG1,
  },
  {
    title: 'Aganice Aromatique Candle',
    description: 'Cardamom, Mimosa, Tabacco',
    image: LPG2,
  },
  {
    title: 'Ptolemy Aromatique Candle',
    description: 'A sensuous blend of leather, smoke and wood',
    image: LPG3,
  },
  {
    title: 'Callippus Aromatique Candle',
    description: 'A marriage of deep greens and earthy spices',
    image: LPG4,
  },
  {
    title: 'Bronze Incense Holder',
    description: 'Suited to any interior',
    image: LPG5,
  },
  {
    title: 'Murasaki Aromatique Incense',
    description: 'For those who favour aromas of warm spice',
    image: LPG6,
  },
  {
    title: 'Kagerou Aromatique Incense',
    description: 'For those particularly partial to Vetiver',
    image: LPG7,
  },
  {
    title: 'Sarashina Aromatique Incense',
    description: 'For those particularly partial to sandalwood',
    image: LPG8,
  },
];

const M6 = () => {
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
        <h3>For the home</h3>
        <h2>Domestic pleasures</h2>
        <p>Our range of aromatic formulations for the home are practical and pleasing in equal measure</p>
        <p>See all Home &rarr;</p>
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
                <h3>{item.description}</h3>
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

export default M6;
