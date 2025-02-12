import React, { useState } from 'react';

const ProductGallery: React.FC = () => {
  const [mainImage, setMainImage] = useState('/path/to/main-image.jpg');
  const thumbnails = [
    '/path/to/thumb1.jpg',
    '/path/to/thumb2.jpg',
    '/path/to/thumb3.jpg',
    '/path/to/thumb4.jpg'
  ];

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <img 
          src={mainImage} 
          alt="Main Product" 
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
      <div className="flex space-x-2">
        {thumbnails.map((thumb, index) => (
          <img 
            key={index}
            src={thumb} 
            alt={`Thumbnail ${index + 1}`}
            className="w-20 h-20 object-cover rounded cursor-pointer hover:opacity-75"
            onClick={() => setMainImage(thumb)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;