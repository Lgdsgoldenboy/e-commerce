import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductReviews from '../components/ProductReviews';
import ExtraInfo from '../components/ExtraInfo';
import NewsletterSignup from '../components/NewsletterSignup';

const ProductPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery />
        <div>
          <ProductInfo />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-4">
            Add to Cart
          </button>
          <ExtraInfo />
        </div>
      </div>
      <div className="mt-8">
        <ProductReviews />
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default ProductPage;