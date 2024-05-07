// Page.js

import DonorCard from '../components/DonorCard';
import FulfilledDonationsCard from '../components/FulfilledDonationsCard';
import { useState } from 'react';

const DonorDetails = () => {
  const [viewDetails, setView] = useState(false);

  return (
    <div className="flex justify-center">
      {viewDetails ? (
        <DonorCard />
      ) : (
        <FulfilledDonationsCard setView={setView} />
      )}
    </div>
  );
};

export default DonorDetails;
