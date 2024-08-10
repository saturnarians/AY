import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSlider";
import QuoteForm from "../components/QuoteForm";
import Button from "../components/Buttons";
import Footer from "../components/Footer";



const HomePage = () => {
  return (
    <>
    <div className="h-full font-[sans-serif] bg-center bg-cover w-[auto]">
      <div className=" ">
      <Header />
      </div>
      <div className=" ">
      <Navbar className=' place-self-center'/>
      </div>
      <div className="">
      <Hero className='' />
      </div>
      
      <div className="">
        <QuoteForm />
      </div>

      <div className="place-self-center">
      <Button />
      </div>

      <div className="place-self-center">
      <Footer />
      </div>
      
     </div>
    </>
  );
};

export default HomePage;
