import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdAddIcCall } from "react-icons/md";

const Header = () => (
  <header className="bg-gray-800 text-white p-4 ">
    <div className="flex flex-wrap justify-between gap-2 items-center mx-12 ">
    <div className='relative text-red-600'><MdAddIcCall className='absolute top-[5px] left-[-20px] '/>: (123) 456-7890</div>
    <div className="flex space-x-4">
      <a href="#twitter" className="text-blue-400">
        <FaTwitter size={24} />
      </a>
      <a href="#facebook" className="text-blue-600">
        <FaFacebook size={24} />
      </a>
      <a href="#instagram" className="text-pink-600">
        <FaInstagram size={24} />
      </a>
    </div>
    </div>
  </header>
);

export default Header;
