import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logo from "../assets/ActiveLogo.webp";
import {Link as RouterLink} from 'react-router-dom';
import LanguageSelector from "./LanguageSelector";
import { useLanguageContext } from "../context/LanguageContext";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [clientsMenuOpen, setClientsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // const toggleClientsMenu = () => {
  //   setClientsMenuOpen(!clientsMenuOpen);
  // };

  const { t } = useLanguageContext();

  return (
    <div className="relative flex justify-between items-center px-6 bg-gray-900">
      <RouterLink to={'./'}>
      <img src={Logo} alt="Active Management" className="mx-1 xl:mx-4 2xl:mx-6 w-[80px] h-[80px] object-contain" />
      </RouterLink>

      {/* Mobile Menu Button */}
      <div className="flex 2xl:hidden">
      <div className='bg-red-700 text-white rounded-md mr-[30px] px-[10px] py-[4px]'><LanguageSelector /></div>
        <span onClick={toggleMobileMenu} className="text-white text-2xl xl:mx-4">
          <FaBars />
        </span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden 2xl:flex text-white p-4 space-x-4 justify-end items-center mx-4 ">
        <div className="flex space-x-4 items-center">
        <RouterLink to={'./'} className='hover:text-red-700'>{t('navbar.Home')}</RouterLink>
          {/* <div className="relative group">
            <RouterLink to={'./Clients'} className="flex items-center space-x-1">
              <span>Clients</span>
              <FaChevronDown className="text-sm" />
            </RouterLink>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50 hidden group-hover:block">
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Football</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Music</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Acting</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Tennis</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Boxing</RouterLink>
            </div>
          </div> */}
          {/* <RouterLink to={'./LatestNews'}>Latest News</RouterLink> */}
          <RouterLink to={'./AboutUs'} className='hover:text-red-700'>{t('navbar.About')}</RouterLink>
          <RouterLink to={'./ContactUs'} className='hover:text-red-700'>{t('navbar.Contact')}</RouterLink>
          <div className='bg-red-700 text-white rounded-md mr-[30px] py-[4px] hover:text-blue-900'><LanguageSelector /></div>
          
        </div>
        {/* <input type="text" placeholder="Search" className="bg-gray-700 text-white p-1 rounded" /> */}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="2xl:hidden absolute top-full left-0 w-full bg-gray-800 text-white z-50">
          <div className="flex flex-col space-y-2 p-4">
          <RouterLink to={'./'} className='hover:text-red-700'>{t("navbar.Home")}</RouterLink>
            {/* <div className="relative">
              <button
                onClick={toggleClientsMenu}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Clients</span>
                {clientsMenuOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
              </button>
              {clientsMenuOpen && (
                <div className="ml-4 mt-2">
                <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Football</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Music</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Acting</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Tennis</RouterLink>
            <RouterLink to={'./Clients'} className="block px-4 py-2 hover:bg-gray-700">Boxing</RouterLink>
                </div>
              )}
            </div> */}
          {/* <RouterLink to={'./LatestNews'}>Latest News</RouterLink> */}
          <RouterLink to={'./AboutUs'} className='hover:text-red-700'>{t("navbar.About")}</RouterLink>
          <RouterLink to={'./ContactUs'} className='hover:text-red-700'>{t("navbar.Contact")}</RouterLink>
            {/* <input type="text" placeholder="Search" className="bg-gray-700 text-white p-2 rounded" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
