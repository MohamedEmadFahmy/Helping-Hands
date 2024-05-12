/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import OrganizationDonationDetails from './OrganizationDonationDetails';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const OrganizationDonorDonationsCard = ({
  name,
  date,
  category,
  isFulfilled,
  statusPic,
}) => {
  const [viewDetails, setView] = useState(false);
  const [deleteDonation, setDeleteDonation] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {!deleteDonation && (
        <div className="flex-row pt-5 pl-5 text-lg bg-white w-3/5 h-auto shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100 rounded-lg">
          <div className="flex gap-5 mb-5">
            <div>Contributor: {name}</div>
            {isFulfilled && (
              <button
                className="bg-primaryShades-500 rounded-sm px-2 py-0.5 text-xs"
                onClick={() => setView(true)}
              >
                View Details
              </button>
            )}
          </div>
          <div className="pb-5">Fulfillment Date: {date}</div>
          <div className="pb-5">Category: {category}</div>
          <div className="flex items-center justify-between mb-5 mr-5">
            <img
              src={statusPic}
              alt="Profile Icon"
              style={{
                width: '50px',
                height: '50px',
                marginTop: '20 px',
              }}
            />

            <div className="flex gap-5">
              {!isFulfilled && (
                <button
                  className="bg-primaryShades-500 rounded-lg px-6 text-s"
                  onClick={() => {
                    navigate('/organization/donation-create');
                  }}
                >
                  Update
                </button>
              )}
              {isFulfilled && (
                <button
                  onClick={() => navigate('/organization/delivery')}
                  className="bg-primaryShades-500 rounded-lg px-7 text-s"
                >
                  Track
                </button>
              )}
              <button
                className="bg-red-500 rounded-lg px-6 text-s"
                onClick={() => setDeleteDonation(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {viewDetails && <OrganizationDonationDetails setView={setView} />}
    </>
  );
};

export default OrganizationDonorDonationsCard;
