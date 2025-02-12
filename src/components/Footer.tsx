import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            <li><a href="/faq" className="hover:text-blue-300">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul>
            <li><a href="/shipping" className="hover:text-blue-300">Shipping</a></li>
            <li><a href="/returns" className="hover:text-blue-300">Returns</a></li>
            <li><a href="/support" className="hover:text-blue-300">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        © 2024 Your E-commerce Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
