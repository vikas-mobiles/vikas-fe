import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt, FaHeadphones,  FaUserCog, FaStar } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="space-y-12">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MobileStore</h1>
          <p className="text-xl mb-8">Your one-stop shop for quality phones and accessories</p>
          <div className="flex justify-center space-x-4">
            <Link to="/phones" className="btn btn-secondary flex items-center justify-center">
              <FaMobileAlt className="mr-2" /> Shop Phones
            </Link>
            <Link to="/accessories" className="btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center">
              <FaHeadphones className="mr-2" /> Shop Accessories
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            name="iPhone 12" 
            price={699} 
            image="/images/iphone-12.jpg"
            rating={4.5}
          />
          <ProductCard 
            name="Samsung Galaxy S21" 
            price={799} 
            image="/images/samsung-s21.jpg"
            rating={4.7}
          />
          <ProductCard 
            name="Google Pixel 5" 
            price={599} 
            image="/images/pixel-5.jpg"
            rating={4.6}
          />
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaMobileAlt className="text-4xl text-primary mb-4" />}
              title="Quality Products" 
              description="We offer only the best quality phones and accessories from trusted brands."
            />
            <FeatureCard 
              icon={<FaUserCog className="text-4xl text-primary mb-4" />}
              title="Expert Support" 
              description="Our knowledgeable team is always ready to help you find the perfect device."
            />
            <FeatureCard 
              icon={<FaUserCog className="text-4xl text-primary mb-4" />}
              title="Fast Shipping" 
              description="Get your orders quickly with our efficient shipping process."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ name, price, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span>{rating}</span>
        </div>
        <p className="text-gray-600 mb-4">${price}</p>
        <button className="btn btn-primary w-full flex items-center justify-center">
          <FaStar className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;