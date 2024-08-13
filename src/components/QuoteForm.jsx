import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    enquiryType: '',
    email: '',
    enquiryDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_g1tdkb9","template_44zhkel", formData, 'VJi69gQ80JUFaOk7A')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your enquiry has been sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send your enquiry. Please try again.');
      });

    setFormData({
      name: '',
      telephone: '',
      enquiryType: '',
      email: '',
      enquiryDetails: ''
    });
  };

  return (
    <div className="p-4 grid mb-8">
      <h2 className="text-[40px] font-bold mb-4 text-center">Make An Enquiry Today!</h2>
      <p className="xl:mb-[90px] mb-[20px] text-center font-semibold text-red-500 text-[13px]">
        *Unfortunately, we are unable to forward any mail to our clients. Please note, any unsolicited mail will NOT be returned and will be disposed of accordingly.
      </p>
      <div className="place-self-center flex flex-col xl:flex-row justify-between items-center space-x-8 w-full max-w-6xl mx-6">
        <form onSubmit={handleSubmit} className="space-y-4 w-[70%]">
        <div className=''>
          <div className="flex flex-col 2xl:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700">What's Your Enquiry?</label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Select an option</option>
                <option value="Book a Celebrity">Book a Celebrity</option>
                <option value="Availability Check">Availability Check</option>
                <option value="Charity Enquiry">Charity Enquiry</option>
                <option value="Interview Request">Interview Request</option>
                <option value="Payment Enquiry">Payment Enquiry</option>
                <option value="Personal Appearance Enquiry">Personal Appearance Enquiry</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col 2xl:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700">Telephone Number</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          </div>

          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700">Tell Us About Your Enquiry</label>
            <textarea
              name="enquiryDetails"
              value={formData.enquiryDetails}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              style={{ width: "100%" }} // Center and ensure the textarea takes full width
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded-md hover:bg-blue-500"
          >
            SUBMIT FORM
          </button>
        </form>
        <div className="container place-self-center 2xl:mt-[-50px] xl:mt-[-180px] mt-8 xl:w-1/2 xl:text-center ml-[-100px] ">
        
          <a href="tel:02031982200" className="hover:text-red-500 cursor-pointer text-[20px] relative">
            <MdAddIcCall className='absolute 2xl:top-[7px] 2xl:right-[140px] xl:right-[135px] xl:top-[5px] right-[-140px] top-[8px]'/>020 3198 2200</a>
          <a href="mailto:info@celebagents.co.uk" className="block hover:text-red-500 cursor-pointer text-[20px] relative">
            <MdOutlineMail className='absolute 2xl:top-[7px] 2xl:right-[345px] xl:right-[257px] xl:top-[8px] right-[18px] top-[8px]'/>info@celebagents.co.uk</a>

          <p className="mt-2 font-semibold text-left xl:text-center">Opening Hours:</p>
          <ul className="mt-2 leading-loose tracking-tight text-base ">
            <li className="hover:text-red-500 cursor-pointer relative ">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>Monday: 9am-6:00pm</li>
            <li className="hover:text-red-500 cursor-pointer relative ">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>Tuesday: 9am-6:00pm</li>
            <li className="hover:text-red-500 cursor-pointer relative 2xl:ml-[22px] ">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>Wednesday: 9am-6:00pm</li>
            <li className="hover:text-red-500 cursor-pointer relative 2xl:ml-[1px]">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>Thursday: 9am-6:00pm</li>
            <li className="hover:text-red-500 cursor-pointer relative 2xl:ml-[-13px]">
              <IoTimeOutline className='absolute 2xl:xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>Friday: 9am-6:00pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;