import React from 'react';
import Clients from './pages/Clients';
import AboutUs from './pages/AboutUs';
import LatestNews from './pages/LatestNews';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
// import ErrorPage from "./ErrorHandling/Error";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import TawkToWidget from './components/TawkToWidget';

const App = () => {
  
  return ( 
    <div className='h-full w-auto'>
    <Header />
    <Navbar />
    <Routes>
      <Route index element={<HomePage className="delay-[30ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"/>} />
      <Route path="AboutUs" element={<AboutUs className="delay-[30ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"/>} />
      <Route path="Clients" element={<Clients className="delay-[30ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"/>} />
      <Route path="ContactUs" element={<ContactUs className="delay-[30ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"/>} />
      <Route path="LatestNews" element={<LatestNews className="delay-[30ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"/>} />
    </Routes>
    <TawkToWidget />
    <Footer/>
    </div>
  );
};

export default App;
