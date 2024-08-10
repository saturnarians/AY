import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSlider";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";



const HomePage = () => {
  return (
    <>
 <div className="app">
 <Header />
 <Navbar />
 <HeroSlider />
 <QuoteForm />
 <Clients />
 <AboutUs />
 <LatestNews />
 <ContactUs />
 <Footer />
</div>
    </>
  );
};

export default HomePage;
