/* eslint-disable react/prop-types */

import profileIcon from '../assets/DonationCardsImages/profileIcon.png';
import { useState } from 'react';

const CaseCard = ({ field1, field2, field3, field4, field5, field6 }) => {
  const [viewVolunteer, setVolunteer] = useState(false);

  return (
    <>
      <div className="flex bg-white w-full shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100">
        <div className="flex flex-col w-full ">
          <div className="flex gap-7 mt-5 ml-5 w-full">
            <div>
              <img
                className="rounded-full"
                src={profileIcon}
                alt="hospital logo"
                style={{
                  width: '50px',
                  height: '50px',
                }}
              />
            </div>
            <div className="flex-col flex gap-6 ">
              <h1 className="text-3xl border-b border-gray-500">{field1}</h1>
              <h1 className="text-xl">{field2}</h1>
              <h1 className="text-lg">{field3}</h1>
            </div>
          </div>
          <div className="flex justify-end pr-5 pb-5 gap-3">
            <button
              className="bg-primaryShades-500 rounded-md px-8 "
              onClick={() => setVolunteer(true)}
            >
              Volunteer
            </button>
          </div>
        </div>
      </div>

      {viewVolunteer && (
        <>
          <div className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-[60]"></div>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50 z-[70]">
            <div className="bg-white rounded-3xl shadow-2xl p-6 w-1/3 h-3/12">
              <h1 className="text-lg font-semibold mb-4 underline">{field1}</h1>
              <p className="mb-2">{`Urgency: ${field4}`}</p>
              <p className="mb-2">{`Description: ${field5}`}</p>
              <p className="mb-2">{`Publishment Date: ${field6}`}</p>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3 justify-center items-center"></div>
                <div>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md mr-2 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500">
                    Volunteer
                  </button>
                </div>
              </div>
              <button
                className="block w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onClick={() => setVolunteer(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CaseCard;
