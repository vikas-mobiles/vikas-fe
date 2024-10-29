import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SecondHandMobiles from './pages/SecondHandMobiles';
import Accessories from './pages/Accessories';
import Contact from './pages/Contact';
import './styles/global.css';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-roboto">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<SecondHandMobiles />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;