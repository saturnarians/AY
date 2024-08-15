import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from '../assets/AnitaHarrisSliderLatest6.webp';
import slide_2 from '../assets/CapriceBourret-scaled-1.webp';
import slide_3 from '../assets/Jean-Christophe-Novelli-Slider-scaled-1.webp';
import slide_4 from '../assets/NickyClarkeSlider.webp';
import slide_5 from '../assets/ShaunWallace-scaled-1.webp';
// import slide_6 from '../assets/Vicki-Michelle.webp';
import Typewriter from "typewriter-effect";

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
    customPaging: i => (
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
    <div className="relative h-full bg-gray-100">
      <Slider {...settings}>
        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>Bringing the best out of our clients.</p>
          <span className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px]  leading-tight tracking-tight text-wrap w-[]">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('"Strong Relationships:"')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('"Cultivate key industry connections..."')
                        .start();
                }}/>
          </span>
          <img className="bg-cover w-[] xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_1} alt="Anita Harris" />
        </div>
        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>Bringing the best out of our clients.</p>
          <span className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px]  leading-tight tracking-tight text-wrap w-[]">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('"Personal Branding:"')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('" Maintain a consistent, authentic image..."')
                        .start();
                }}/>
          </span>
          <img className="bg-cover w-[] xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_2} alt="Caprice Bourret" />
        </div>
        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>Bringing the best out of our clients.</p>
          <span className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px]  leading-tight tracking-tight text-wrap w-[]">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('"Crisis Management:"')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('"Handle negative publicity swiftly..."')
                        .start();
                }}/>
          </span>
          <img className="bg-cover w-[] xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_3} alt="Jean-Christophe-Novelli" />
        </div>
        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>Bringing the best out of our clients.</p>
          <span className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px]  leading-tight tracking-tight text-wrap w-[]">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('"Strategic Partnerships:"')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('"Experience secure beneficial collaborations..."')
                        .start();
                }}/>
          </span>
          <img className="bg-cover w-[] xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_4} alt="Nicky Clarke" />
        </div>
        <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>Bringing the best out of our clients.</p>
          <span className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px]  leading-tight tracking-tight text-wrap w-[]">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('"Digital Presence:"')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('"Optimize social media engagement..."')
                        .start();
                }}/>
          </span>
          <img className="bg-cover w-[] xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_5} alt="Shaun Wallace" />
        </div>
        {/* <div className='relative'>
          <p className='text-gray-900 w-auto xl:w-[800px] font-bold absolute left-0 top-0 mx-10 mt-12 p-2 leading-tight tracking-tight text-wrap text-[40px] 2xl:text-[60px] 3xl:text-[70px] xl:text-[50px]'>Vicki Michelle</p>
          <span className="mx-12 text-red-900 text-[19px] xl:text-[40px] font-semibold absolute left-0 top-[40px] xl:top-[80px] 2xl:top-[98px] mt-[120px]  leading-tight tracking-tight text-wrap w-[]">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}/>
          </span>
          <img className="bg-cover w-[] xl:h-[350px] 2xl:h-[450px] h-[300px]" src={slide_6} alt="Vicki-Michelle" />
        </div> */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
