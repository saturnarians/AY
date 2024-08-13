import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Contact from '../assets/contact.jpg';

// Define map container styles and center position
const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 51.505, // Latitude for London
  lng: -0.09,  // Longitude for London
};

const ContactUs = () => {
  
  const [selected, setSelected] = React.useState(null);

  return (
    <div className=" w-full grid bg-gray-300">
      <Header />
      <Navbar/>
      <div className='h-full relative text-white'>
      <img src={Contact} alt="" className="w-full h-[500px] bg-cover" />
      <h1 className=" absolute xl:top-[100px] top-[20px]  left-[] 2xl:text-[80px] xl:[50px] text-[30px] mb-4 items-left font-semibold my-8 mx-[46px]">Contact Us</h1>
      <p className="absolute xl:top-[260px] top-[130px] left-[] px-4 mx-8 font-semibold">For any questions about our services or help identifying the right talent for your project, email us at  info@activebmanagement.com  or fill out our inquiry form. One of our agents will be in touch as soon as possible.</p>
      </div>

      <div className=''>
      <QuoteForm />
      </div>
    

    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} // Your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker
          position={center}
          onClick={() => setSelected(center)}
        />
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>Marker Title</h2>
              <p>Additional information about this location.</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
    
    <div className='w-full'>
      <Footer/>
    </div>
    </div>
);
};

export default ContactUs;
       
