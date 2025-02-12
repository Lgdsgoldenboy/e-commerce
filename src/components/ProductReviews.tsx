import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const ProductReviews: React.FC = () => {
  const reviews = [
    { 
      name: 'John Doe', 
      rating: 5, 
      comment: 'Excellent sound quality and comfortable to wear!' 
    },
    { 
      name: 'Jane Smith', 
      rating: 4, 
      comment: 'Great product, battery life is impressive.' 
    }
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <div className="flex items-center mb-2">
            <span className="font-medium mr-4">{review.name}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;