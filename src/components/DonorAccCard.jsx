import React from 'react';  // Don't forget to import React
import G57357 from '../assets/images/gand/57357.jpeg';
import G157357 from '../assets/images/gand/G157357.jpeg';
import rman1 from '../assets/images/gand/rman1.jpg';
import rman from '../assets/images/gand/rman.jpeg';
import ahl1 from '../assets/images/gand/ahl1.jpeg';
import ahl from '../assets/images/gand/ahl.jpeg';
import cccpa1 from '../assets/images/gand/cccpa1.jpeg';
import cccpa from '../assets/images/gand/cccpa.jpeg';

const DonorAccCard=()=>{

    return(

  <div className="bg-gray-200 p-4 rounded-md mt-4">
        <div className="flex items-center gap-2">
          <img src={G157357} alt="Donor Logo" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-gray-800 font-medium">John Doe</p>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600">Area: Cairo</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-500">
            Delete Account
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500">
            View Details
          </button>
        </div>

      </div>
       
    );
};

export default DonorAccCard;
