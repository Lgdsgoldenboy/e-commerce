import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/products" className="hover:text-blue-600">Products</a></li>
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
          </ul>
        </nav>
        <div>
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Header;