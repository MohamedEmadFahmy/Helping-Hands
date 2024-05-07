import React from 'react';  // Don't forget to import React
import G57357 from '../assets/images/57357.jpeg';
import G157357 from '../assets/images/G157357.jpeg';
import rman1 from '../assets/images/rman1.jpg';
import rman from '../assets/images/rman.jpeg';
import ahl1 from '../assets/images/ahl1.jpeg';
import ahl from '../assets/images/ahl.jpeg';
import cccpa1 from '../assets/images/cccpa1.jpeg';
import cccpa from '../assets/images/cccpa.jpeg';

const Organization = () => {

  return (
    <div className="flex flex-col min-h-screen px-4 py-6 bg-blue-100">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-xl font-bold text-center mr-4">Account Management</h1>
        <h2 className="text-lg font-medium text-center">Organizations</h2>
      </div>

      <div className="flex mb-4">
        <div className="w-full mr-4">
          <input
            type="text"
            placeholder="Search by Organization Name"
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            Filter by Government
          </button>
          <button className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            Filter by Area
          </button>
          <button className="px-3 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
            Filter by Organization Type
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First organization entry */}
        <div className="flex flex-col bg-white rounded-md shadow-md p-4">
          <img src={G157357} alt="Hospital Logo" className="w-20 h-20 mb-2 self-center" />
          <h3 className="text-lg font-medium mb-1">57357 Hospital</h3>
          <p className="text-gray-600 mb-1">Type: Research Cancer Hospital</p>
          <p className="text-gray-600 mb-1">Area: Cairo</p>
          <img src={G57357} alt="Hospital Picture" className="w-full h-40 rounded-b-md" />
        </div>

        {/* Second organization entry */}
        <div className="flex flex-col bg-white rounded-md shadow-md p-4">
          <img src={rman} alt="Hospital Logo" className="w-20 h-20 mb-2 self-center" />
          <h3 className="text-lg font-medium mb-1">جمعيه الاورمان</h3>  
          <p className="text-gray-600 mb-1">Type: موسسه خيريه</p>  
          <p className="text-gray-600 mb-1">Area: cairo</p>  
          <img src={rman1} alt="Hospital Picture" className="w-full h-40 rounded-b-md" />
        </div>

        {/* Third organization entry */}
        <div className="flex flex-col bg-white rounded-md shadow-md p-4">
          <img src={ahl} alt="Hospital Logo" className="w-20 h-20 mb-2 self-center" />
          <h3 className="text-lg font-medium mb-1">AHL Hospital</h3>  
          <p className="text-gray-600 mb-1">Type: Hospital Type</p>  
          <p className="text-gray-600 mb-1">Area: Hospital Area</p>  
          <img src={ahl1} alt="Hospital Picture" className="w-full h-40 rounded-b-md" />
        </div>

        {/* Fourth organization entry */}
        <div className="flex flex-col bg-white rounded-md shadow-md p-4">
          <img src={cccpa1} alt="Hospital Logo" className="w-20 h-20 mb-2 self-center" />
          <h3 className="text-lg font-medium mb-1">Hospital Name 3</h3>  
          <p className="text-gray-600 mb-1">Type: Hospital Type 3</p>  
          <p className="text-gray-600 mb-1">Area: Hospital Area 3</p>  
          <img src={cccpa} alt="Hospital Picture" className="w-full h-40 rounded-b-md" />
        </div>
      </div>
    </div>
  );
};

export default Organization;
