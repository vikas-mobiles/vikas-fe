import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-roboto font-bold text-gray-800">Mobile Store</Link>
          <div className="flex space-x-4">
            <Link to="/phones" className="font-roboto text-gray-600 hover:text-blue-500">Phones</Link>
            <Link to="/accessories" className="font-roboto text-gray-600 hover:text-blue-500">Accessories</Link>
            <Link to="/contact" className="font-roboto text-gray-600 hover:text-blue-500">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;