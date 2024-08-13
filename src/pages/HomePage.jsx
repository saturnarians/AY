import React from "react";
import HeroSlider from "../components/HeroSlider";
import QuoteForm from "../components/QuoteForm";
import OurServices from "../components/OurServices";
import AboutSection from "../components/AboutSection";



const HomePage = () => {
  return (
 <>
 <div className="h-full font-[ui-sans-serif, system-ui] bg-gradient-to-left-top bg-center bg-cover w-[auto] relative">
 <div className="">
 </div>
 <div className="">
 <HeroSlider />
 </div>
 <div className="delay-[30ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
 <OurServices />
 </div>
 <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
  <AboutSection />
 </div>
 <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
 <QuoteForm />
 </div>
 <div className="">
 </div>
 </div>
 </>
  );
};

export default HomePage;
