/* eslint-disable react/prop-types */

import CheckMark from '../assets/images/checkmark.png';
import OrganizationDonorDonationsCard from './OrganizationDonorDonationsCard';
import Pending from '../assets/images/pending.png';

const OrganizationDonations = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 pt-3 pb-3">
      <OrganizationDonorDonationsCard
        name="N/A"
        date="N/A"
        category="Medicine"
        isFulfilled={false}
        statusPic={Pending}
      />
      <OrganizationDonorDonationsCard
        name="N/A"
        date="N/A"
        category="Toys"
        isFulfilled={false}
        statusPic={Pending}
      />
      <OrganizationDonorDonationsCard
        name="N/A"
        date="N/A"
        category="Clothes"
        isFulfilled={false}
        statusPic={Pending}
      />
      <OrganizationDonorDonationsCard
        name="N/A"
        date="N/A"
        category="Medicine"
        isFulfilled={false}
        statusPic={Pending}
      />
      <OrganizationDonorDonationsCard
        name="Ghorza"
        date="2022-02-01"
        category="Electrical Appliances"
        isFulfilled={true}
        statusPic={CheckMark}
      />
      <OrganizationDonorDonationsCard
        name="Emad"
        date="2022-03-01"
        category="Clothes"
        isFulfilled={true}
        statusPic={CheckMark}
      />
    </div>
  );
};

export default OrganizationDonations;
