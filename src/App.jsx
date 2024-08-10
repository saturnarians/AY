import React from 'react';
import Clients from './pages/Clients';
import AboutUs from './pages/AboutUs';
import LatestNews from './pages/LatestNews';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
// import ErrorPage from "./ErrorHandling/Error";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (


<Routes>
<Route index element={<HomePage />} /> 
{/* errorElement= {<ErrorPage />} */}
<Route path="AboutUs" element={<AboutUs/>} />
<Route path="Clients" element={<Clients/>} />
<Route path="ContactUs" element={<ContactUs/>} />
<Route path="LatestNews" element={<LatestNews/>} />
<Route path="/" element={<Routes />}></Route>
</Routes>
);
};
export default App;
