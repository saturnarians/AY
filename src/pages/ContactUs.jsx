import React from 'react';
import QuoteForm from '../components/QuoteForm';
import Contact from '../assets/contact.jpg';
import GoogleMap from '../components/Map';

const ContactUs = () => {
  

  return (
    <div className=" w-full grid bg-gray-300">
      <div className='h-full relative text-white'>
      <img src={Contact} alt="" className="w-full h-[500px] bg-cover" />
      <h1 className=" absolute xl:top-[100px] top-[20px]  left-[] 2xl:text-[80px] xl:[50px] text-[30px] mb-4 items-left font-semibold my-8 mx-[46px]">Contact Us</h1>
      <p className="absolute xl:top-[260px] top-[130px] left-[] px-4 mx-8 font-semibold">For any questions about our services or help identifying the right talent for your project, email us at  info@activebmanagement.com  or fill out our inquiry form. One of our agents will be in touch as soon as possible.</p>
      </div>

      <div className=''>
      <QuoteForm />
      </div>
      <GoogleMap />
    </div>
);
};

export default ContactUs;
       
