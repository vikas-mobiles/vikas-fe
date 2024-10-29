import React, { useState } from 'react';
import axios from 'axios';

const BuyForm = ({ productId, onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1); // Default quantity to 1

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/orders', {
        productId,
        name,
        phoneNumber,
        address,
        quantity, // Include quantity in the payload
      });
      alert('Order placed successfully!');
      onClose();
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center">
      <div className="bg-primary p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Place Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="luxury-input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="luxury-input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="luxury-input w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1" // Ensure quantity is at least 1
              className="luxury-input w-full"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="luxury-button bg-accent">
              Cancel
            </button>
            <button type="submit" className="luxury-button">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyForm;
