import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { useLanguageContext } from "../context/LanguageContext";


const QuoteForm = () => {

  const { t } = useLanguageContext()
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

    // Validate form data before sending
    if (!formData.name || !formData.telephone || !formData.enquiryType || !formData.email || !formData.enquiryDetails) {
      alert('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send("service_qdht8so","template_gzlw7b8", formData, "pCCbTOWNjr3SbaYB8")
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your enquiry has been sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send your enquiry. Please try again.');
    });

    // Reset form fields
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
      <h2 className="text-[40px] font-bold mb-4 text-center">{t('quoteForm.line1')}</h2>
      <p className="xl:mb-[90px] mb-[20px] text-center font-semibold text-red-500 text-[13px]">
      {t('quoteForm.line2')} 
      </p>
      <div className="place-self-center flex flex-col xl:flex-row justify-between items-center space-x-8 w-full max-w-6xl mx-6">
        <form onSubmit={handleSubmit} className="space-y-4 w-[70%]">
          <div className=''>
            <div className="flex flex-col 2xl:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-gray-700">{t('quoteForm.line3')}</label>
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
                <label className="block text-sm font-medium text-gray-700">{t('quoteForm.line4')}</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled>{t('quoteForm.line5')}</option>
                  <option value="Book an appointment">{t('quoteForm.line6')}</option>
                  <option value="Book for vacation">{t('quoteForm.line7')}</option>
                  <option value="Charity support">{t('quoteForm.line8')}</option>
                  <option value="Interview Request">{t('quoteForm.line9')}</option>
                  <option value="Meet and greet">{t('quoteForm.line9y')}</option>
                  <option value="Ask for retirement">{t('quoteForm.line10')}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="block text-sm font-medium text-gray-700">{t('quoteForm.line11')}</label>
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
                <label className="block text-sm font-medium text-gray-700">{t('quoteForm.line11y')}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t('quoteForm.line12')}</label>
            <textarea
              name="enquiryDetails"
              value={formData.enquiryDetails}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              style={{ width: "100%" }}
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-red-500 text-white p-2 rounded-md hover:bg-blue-500"
          >
           {t('quoteForm.line13')}
          </button>
        </form>
        <div className="container place-self-center 2xl:mt-[-50px] xl:mt-[-180px] mt-8 xl:w-1/2 xl:text-center ml-[-100px] ">
          <a href="tel:02031982200" className="hover:text-red-500 cursor-pointer text-[20px] relative">
            <MdAddIcCall className='absolute 2xl:top-[7px] 2xl:right-[140px] xl:right-[135px] xl:top-[5px] right-[-140px] top-[8px]'/>020 3198 2200
          </a>
          <a href="mailto:info@celebagents.co.uk" className="block hover:text-red-500 cursor-pointer text-[20px] relative">
            <MdOutlineMail className='absolute 2xl:top-[7px] 2xl:right-[345px] xl:right-[257px] xl:top-[8px] right-[18px] top-[8px]'/>info@celebagents.co.uk
          </a>
          <p className="mt-2 font-semibold text-left xl:text-center">{t('quoteForm.line14')}:</p>
          <ul className="mt-2 leading-loose tracking-tight text-base ">
            <li className="hover:text-red-500 cursor-pointer relative ">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>{t('quoteForm.line15')}
            </li>
            <li className="hover:text-red-500 cursor-pointer relative ">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>{t('quoteForm.line16')}
            </li>
            <li className="hover:text-red-500 cursor-pointer relative 2xl:ml-[22px] ">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>{t('quoteForm.line17')}
            </li>
            <li className="hover:text-red-500 cursor-pointer relative 2xl:ml-[1px]">
              <IoTimeOutline className='absolute 2xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>{t('quoteForm.line18')}
            </li>
            <li className="hover:text-red-500 cursor-pointer relative 2xl:ml-[-13px]">
              <IoTimeOutline className='absolute 2xl:xl:top-[7px] 2xl:right-[320px] right-[18px] top-[8px]'/>{t('quoteForm.line19')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
