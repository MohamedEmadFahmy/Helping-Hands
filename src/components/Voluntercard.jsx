import { useState } from "react";
import PropTypes from "prop-types";

const VolunterCardkr = ({ setView2 }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewDetailsClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="flex-col justify-center  h-full px-4 py-6 bg-gray-100 m-auto place-content-stretch shadow-2xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col bg-white rounded-md shadow-md p-4 relative w-full h-full">
          <img
            src="images/krprofpic.jpg"
            alt=""
            className="absolute top-0 left-0"
          />

          <div className="pl-20 flex flex-col relative">
            <h3 className="text-lg font-medium mb-1 underline mr-auto">
              Kareem Khalid
            </h3>

            <p className="text-gray-600 mb-1">kareem@gmail.com</p>
            <p className="text-gray-600 mb-1">Teacher request</p>
            <p className="text-gray-600 mb-1">Subject: Arabic</p>
          </div>

          <div className="flex items-center mt-2">
            <button
              className="ml-auto px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onClick={handleViewDetailsClick}
            >
              View Submission Details
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50">
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <h1 className="text-lg font-semibold mb-4 underline">
              Kareem Khalid Radwan Abdulhamed
            </h1>
            <p className="mb-2">Username: kareem.radwan</p>
            <p className="mb-2">DOB: 1203/23/3</p>
            <p className="mb-2">Email: kareem.radwan@student.guc.edu.eg</p>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
                View Submitted Documents
              </button>
              <div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md mr-2 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500">
                  Accept
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-red-500">
                  Reject
                </button>
              </div>
            </div>
            <button
              className="block w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              onClick={() => setIsPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

VolunterCardkr.propTypes = {
  setView2: PropTypes.func.isRequired,
};

export default VolunterCardkr;
