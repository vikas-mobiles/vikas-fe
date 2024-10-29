import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaHeadphones, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaMobileAlt className="mr-2" /> MobileStore
            </h3>
            <p className="mb-4">Your trusted source for mobile devices and accessories.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors flex items-center"><FaMobileAlt className="mr-2" /> Home</Link></li>
              <li><Link to="/phones" className="hover:text-secondary transition-colors flex items-center"><FaMobileAlt className="mr-2" /> Phones</Link></li>
              <li><Link to="/accessories" className="hover:text-secondary transition-colors flex items-center"><FaHeadphones className="mr-2" /> Accessories</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors flex items-center"><FaEnvelope className="mr-2" /> Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> 123 Mobile Street, Tech City, TC 12345</p>
            <p className="flex items-center mb-2"><FaPhone className="mr-2" /> (555) 123-4567</p>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> info@mobilestore.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest offers and products.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow p-2 text-gray-800" />
              <button type="submit" className="bg-secondary text-white px-4 py-2 hover:bg-secondary/80 flex items-center">
                <FaPaperPlane className="mr-2" /> Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 MobileStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;