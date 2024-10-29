import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      // In a real application, you would check the user's session or token here
      // For this example, we'll just simulate authentication
      setIsAuthenticated(true);
      setLoading(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          const [ordersResponse, contactsResponse] = await Promise.all([
            axios.get('https://vikas-be.onrender.com/api/orders'),
            axios.get('https://vikas-be.onrender.com/api/contacts')
          ]);
          setOrders(ordersResponse.data);
          setContacts(contactsResponse.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to load data. Please try again later.');
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [isAuthenticated]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!isAuthenticated) return <p>Access denied. Please log in.</p>;

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrdersList orders={orders} />;
      case 'contacts':
        return <ContactsList contacts={contacts} />;
      case 'addProduct':
        return <AddProductForm />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-8">
        <button
          className={`luxury-button ${activeTab === 'orders' ? 'bg-secondary' : 'bg-accent'}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
        <button
          className={`luxury-button ${activeTab === 'contacts' ? 'bg-secondary' : 'bg-accent'}`}
          onClick={() => setActiveTab('contacts')}
        >
          Contacts
        </button>
        <button
          className={`luxury-button ${activeTab === 'addProduct' ? 'bg-secondary' : 'bg-accent'}`}
          onClick={() => setActiveTab('addProduct')}
        >
          Add Product
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

const OrdersList = ({ orders }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order._id} className="bg-accent bg-opacity-10 p-4 rounded-lg">
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Phone:</strong> {order.phoneNumber}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Product:</strong> {order.productId.name}</p>
            <p><strong>Price:</strong> ${order.productId.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact._id} className="bg-accent bg-opacity-10 p-4 rounded-lg">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('mobile');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://vikas-be.onrender.com/api/products', {
        name,
        price: parseFloat(price),
        image,
        category,
      });
      alert('Product added successfully!');
      setName('');
      setPrice('');
      setImage('');
      setCategory('mobile');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
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
          <label htmlFor="price" className="block mb-2">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="luxury-input w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2">Image URL</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="luxury-input w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="luxury-input w-full"
            required
          >
            <option value="mobile">Mobile</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>
        <button type="submit" className="luxury-button w-full">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;