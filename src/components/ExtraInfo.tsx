import React from 'react';
import { TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const ExtraInfo: React.FC = () => {
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
      <div className="flex space-x-4">
        <div className="flex items-center">
          <TruckIcon className="h-6 w-6 mr-2 text-blue-600" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center">
          <ShieldCheckIcon className="h-6 w-6 mr-2 text-green-600" />
          <span>2-Year Warranty</span>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;