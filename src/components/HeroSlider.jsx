import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from '../assets/AnitaHarrisSliderLatest6.webp';
import slide_2 from '../assets/CapriceBourret-scaled-1.webp';
import slide_3 from '../assets/Jean-Christophe-Novelli-Slider-scaled-1.webp';
import slide_4 from '../assets/NickyClarkeSlider.webp';
import slide_5 from '../assets/ShaunWallace-scaled-1.webp';
import slide_6 from '../assets/Vicki-Michelle.webp';

const HeroSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: 20, // Adjust this value to move the dots higher or lower
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <ul style={{ marginTop: 10 }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      />
    ),
  };

  return (
    <div className="relative h-full">
      <Slider {...settings}>
        <div className='relative'>
          <p className='font-semibold absolute left-0 top-0 m-2 p-2 leading-tight tracking-tight text-wrap 2xl:text-[50px] 3xl:text-[60px] xl:text-[40px]'>Anita Harris</p>
          <img src={slide_1} alt="Anita Harris" />
        </div>
        <div className='relative'>
          <p className='w-auto font-semibold absolute left-0 top-0 m-2 p-2 leading-tight tracking-tight text-wrap 2xl:text-[50px] 3xl:text-[60px] xl:text-[40px]'>Caprice Bourret</p>
          <img src={slide_2} alt="Caprice Bourret" />
        </div>
        <div className='relative'>
          <p className='w-auto font-semibold absolute left-0 top-0 m-2 p-2 leading-tight tracking-tight text-wrap 2xl:text-[50px] 3xl:text-[60px] xl:text-[40px]'>Jean Christophe Novelli</p>
          <img src={slide_3} alt="Jean-Christophe-Novelli" />
        </div>
        <div className='relative'>
          <p className='w-auto font-semibold absolute left-0 top-0 m-2 p-2 leading-tight tracking-tight text-wrap 2xl:text-[50px] 3xl:text-[60px] xl:text-[40px]'>Nicky Clarke</p>
          <img src={slide_4} alt="Nicky Clarke" />
        </div>
        <div className='relative'>
          <p className='w-auto font-semibold absolute left-0 top-0 m-2 p-2 leading-tight tracking-tight text-wrap 2xl:text-[50px] 3xl:text-[60px] xl:text-[40px]'>Shaun Wallace</p>
          <img src={slide_5} alt="Shaun Wallace" />
        </div>
        <div className='relative'>
          <p className='w-auto font-semibold absolute left-0 top-0 m-2 p-2 leading-tight tracking-tight text-wrap 2xl:text-[50px] 3xl:text-[60px] xl:text-[40px]'>Vicki Michelle</p>
          <img src={slide_6} alt="Vicki-Michelle" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
