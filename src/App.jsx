import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import QuoteForm from './components/QuoteForm';
import Clients from './pages/Clients';
import AboutUs from './pages/AboutUs';
import LatestNews from './pages/LatestNews';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
// import ErrorPage from "./ErrorHandling/Error";
import { Route, Routes } from "react-router-dom";

const App = () => (
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

 <Routes>
<Route index element={<HomePage />} {/* errorElement= {<ErrorPage />}*/}  /> 
<Route path="AboutUs" element={<AboutUs/>} />
<Route path="Clients" element={<Clients/>} />
<Route path="ContactUs" element={<ContactUs/>} />
<Route path="LatestNews" element={<LatestNews/>} />
<Route path="/" element={<Routes />}>
 </Route>
</Routes>
</div>
);

export default App;
