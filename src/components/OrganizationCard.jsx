import React from 'react';
import G57357 from '../assets/images/gand/57357.jpeg';
import G157357 from '../assets/images/gand/G157357.jpeg';

const OrganizationCard = () => {
  return (
    <div className="flex flex-col w-full h-full px-4 py-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First organization entry */}
        <div className="flex flex-col bg-white rounded-md shadow-md p-4 relative w-full h-full">
          {/* Small image positioned absolutely top-right */}
          <img
            src={G157357}
            alt="Hospital Logo (small)"
            className="absolute top-0 right-0 w-16 h-16 rounded-full"
          />

          <h3 className="text-lg font-medium mb-1">57357 Hospital</h3>
          <p className="text-gray-600 mb-1">Type: Research Cancer Hospital</p>
          <p className="text-gray-600 mb-1">Area: Cairo</p>

          <img src={G57357} alt="Hospital Picture" className="w-full h-40 rounded-b-md" />

          {/* Button container positioned below the image */}
          <div className="flex justify-end mt-2">
            <button className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-500">
              Delete Account
            </button>
            <button className="px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 ml-2">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
