import React, { useState } from 'react';
import BuyForm from './BuyForm';

const ProductCard = ({ id, name, price, image }) => {
  const [showBuyForm, setShowBuyForm] = useState(false);

  return (
    <div className="bg-accent bg-opacity-10 rounded-lg p-4 shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-secondary font-bold mb-4">${price.toFixed(2)}</p>
      <button
        className="luxury-button w-full"
        onClick={() => setShowBuyForm(true)}
      >
        Buy Now
      </button>
      {showBuyForm && (
        <BuyForm productId={id} onClose={() => setShowBuyForm(false)} />
      )}
    </div>
  );
};

export default ProductCard;