import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log the data to verify the structure
    console.log({ name, email, message });

    try {
      await axios.post(
        'https://vikas-be.onrender.com/api/contacts', 
        { name, email, message }, 
        { headers: { 'Content-Type': 'application/json' } } // Ensure JSON format
      );
      alert('Message sent successfully!');
      
      // Reset the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
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
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="luxury-input w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="luxury-input w-full h-32"
            required
          ></textarea>
        </div>
        <button type="submit" className="luxury-button w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
