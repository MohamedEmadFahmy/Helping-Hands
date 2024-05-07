// Page.js

import DonorCard from '../components/DonorCard';
import FulfilledDonationsCard from '../components/FulfilledDonationsCard';
import { useState } from 'react';

const DonorDetails = () => {
  const [viewDetails, setView] = useState(false);

  return (
    <div className="flex justify-center items-center bg-secondaryShades-500 w-screen h-screen">
      {viewDetails ? (
        <DonorCard />
      ) : (
        <div className="flex flex-col items-center w-full h-3/5 gap-5">
          <FulfilledDonationsCard setView={setView} />
          <FulfilledDonationsCard setView={setView} />
          <FulfilledDonationsCard setView={setView} />
          <FulfilledDonationsCard setView={setView} />
        </div>
      )}
    </div>
  );
};

export default DonorDetails;
