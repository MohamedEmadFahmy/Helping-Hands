/* eslint-disable react/prop-types */

import profileIcon from '../assets/DonationCardsImages/profileIcon.png';

const CaseCard = ({ field1, field2, field3 }) => {
  return (
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
          <button className="bg-primaryShades-500 round-sm px-8  ">
            More Details
          </button>
          <button className="bg-primaryShades-500 round-sm px-8 ">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
