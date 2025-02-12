import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const ProductInfo: React.FC = () => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Premium Wireless Headphones</h1>
      <div className="flex items-center mb-4">
        <span className="text-xl font-semibold mr-4">$199.99</span>
        <div className="flex">{renderStars(4)}</div>
        <span className="ml-2 text-gray-600">(123 reviews)</span>
      </div>
      <p className="text-gray-700 mb-4">
        High-quality wireless headphones with noise cancellation, 
        40-hour battery life, and premium sound quality.
      </p>
    </div>
  );
};

export default ProductInfo;