import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaHeadphones, FaEnvelope, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold flex items-center">
          <FaMobileAlt className="mr-2" />
          MobileStore
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/phones" className="hover:text-secondary transition-colors flex items-center">
                <FaMobileAlt className="mr-1" /> Phones
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="hover:text-secondary transition-colors flex items-center">
                <FaHeadphones className="mr-1" /> Accessories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-secondary transition-colors flex items-center">
                <FaEnvelope className="mr-1" /> Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-secondary transition-colors flex items-center">
                <FaShoppingCart className="mr-1" /> Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;