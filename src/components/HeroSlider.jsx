import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from '../assets/AnitaHarrisSliderLatest6.webp';
import slide_2 from '../assets/CapriceBourret-scaled-1.webp';
import slide_3 from '../assets/Jean-Christophe-Novelli-Slider-scaled-1.webp';
import slide_4 from '../assets/NickyClarkeSlider.webp';
import slide_5 from '../assets/ShaunWallace-scaled-1.webp';
import { useLanguageContext } from "../context/LanguageContext";

const HeroSlider = () => {
  const { t } = useLanguageContext();
  const sliderRef = React.useRef(null);

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
      <div style={{ display: 'none' }}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div style={{ backgroundColor: 'white', width: '8px', height: '8px', borderRadius: '50%' }} />
    ),
  };

  return (
    <div className="relative h-full bg-gray-100">
      <Slider ref={sliderRef} {...settings}>
        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-[0] lg:top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>{t('hero.line1')}</p>
          <p className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 hidden xl:block top-[85px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px] leading-tight tracking-tight text-wrap">
            {t('hero.line2')}
          </p>
          <p className="mx-12 text-red-900 text-[13px] xl:text-[30px] font-semibold absolute left-0 top-[25px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[4px] xl:mt-[170px] leading-tight tracking-tight text-wrap">
            {t('hero.line3')}
          </p>
          <img className="bg-cover xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_1} alt="Anita Harris" />
        </div>

        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-[0] lg:top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>{t('hero.line1')}</p>
          <p className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 hidden xl:block top-[85px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px] leading-tight tracking-tight text-wrap">
            {t('hero.line4')}
          </p>
          <p className="mx-12 text-red-900 text-[13px] xl:text-[30px] font-semibold absolute left-0 top-[25px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[4px] xl:mt-[170px] leading-tight tracking-tight text-wrap">
            {t('hero.line5')}
          </p>
          <img className="bg-cover xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_2} alt="Caprice Bourret" />
        </div>

        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-[0] lg:top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>{t('hero.line1')}</p>
          <p className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 hidden xl:block top-[85px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px] leading-tight tracking-tight text-wrap">
            {t('hero.line6')}
          </p>
          <p className="mx-12 text-red-900 text-[13px] xl:text-[30px] font-semibold absolute left-0 top-[25px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[4px] xl:mt-[170px] leading-tight tracking-tight text-wrap">
            {t('hero.line7')}
          </p>
          <img className="bg-cover xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_3} alt="Jean-Christophe Novelli" />
        </div>

        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-[0] lg:top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>{t('hero.line1')}</p>
          <p className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 hidden xl:block top-[85px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px] leading-tight tracking-tight text-wrap">
            {t('hero.line8')}
          </p>
          <p className="mx-12 text-red-900 text-[13px] xl:text-[30px] font-semibold absolute left-0 top-[25px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[4px] xl:mt-[170px] leading-tight tracking-tight text-wrap">
            {t('hero.line9')}
          </p>
          <img className="bg-cover xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_4} alt="Nicky Clarke" />
        </div>

        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-[0] lg:top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>{t('hero.line1')}</p>
          <p className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 hidden xl:block top-[85px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px] leading-tight tracking-tight text-wrap">
            {t('hero.line10')}
          </p>
          <p className="mx-12 text-red-900 text-[13px] xl:text-[30px] font-semibold absolute left-0 top-[25px] lg:top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[4px] xl:mt-[170px] leading-tight tracking-tight text-wrap">
            {t('hero.line11')}
          </p>
          <img className="bg-cover xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_5} alt="Shaun Wallace" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
