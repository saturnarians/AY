import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import {Link as RouterLink} from 'react-router-dom';
import Logo from "../assets/ActiveLogo.webp";

const Footer = () => {
  return (
    <footer className="h-full bg-gray-800 text-white p-8 ">
      <RouterLink to={'./'}>
      <img src={Logo} alt="Active Management" className="mx-1 xl:mx-4 2xl:mx-6 w-[70px] h-[70px] object-contain" />
      </RouterLink>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 xl:ml-[98px]">
        <div className='place-self-center'>
          <h3 className="font-bold mb-2">About Us</h3>
          <ul>
            <li>Meet98he Team</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='place-self-center mt-[-48px] md:mt-[-29px] xl:mt-[-22px]'>
          <h3 className="font-bold mb-2">Latest News</h3>
          <ul>
            <li>Contact Us</li>
            <li>020 3198 2200</li>
          </ul>
        </div>
        <div className="col-span-2 place-self-center xl:mr-[98px] xl:mt-[-52px]">
          <h3 className="font-bold mb-2">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#twitter" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-400 transition duration-300" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF className="text-white hover:text-blue-600 transition duration-300" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-400 transition duration-300" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <FaLinkedinIn className="text-white hover:text-blue-800 transition duration-300" />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-red-600 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center ">
        <p>
          Copyright © 2024 Active Celeb Agents | All Rights Reserved | Website Designed & Maintained by Be My Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
