import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div>Phone: (123) 456-7890</div>
    <div className="flex space-x-4">
      <a href="#twitter" className="text-blue-400">Twitter</a>
      <a href="#facebook" className="text-blue-600">Facebook</a>
      <a href="#instagram" className="text-pink-400">Instagram</a>
    </div>
  </header>
);

export default Header;
