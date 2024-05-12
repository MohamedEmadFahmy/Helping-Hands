import BloodCardParent from '../components/BloodCardParent';
import OrganizationCardParent from '../components/OrganizationCardParent';
import RegularDonationParent from '../components/RegularDonationParent';
import { useState } from 'react';

const DonorDonatePage = () => {
  const [viewBlood, setBlood] = useState(false);
  const [viewGeneral, setGeneral] = useState(true);
  const [viewOrganization, setOrganization] = useState(false);

  return (
    <div className="min-h-[90vh] w-full bg-secondaryShades-500 flex flex-col  items-center gap-10">
      <div className="flex justify-start gap-5 mt-5 ">
        <button
          className="bg-primaryShades-500 rounded-lg px-10 py-2"
          onClick={() => {
            setBlood(true);
            setGeneral(false);
            setOrganization(false);
          }}
        >
          Blood Donations
        </button>
        <button
          className="bg-primaryShades-500 rounded-lg px-5 py-2"
          onClick={() => {
            setBlood(false);
            setGeneral(false);
            setOrganization(true);
          }}
        >
          Organization Donations
        </button>
        <button
          className="bg-primaryShades-500 rounded-lg px-10 py-2"
          onClick={() => {
            setBlood(false);
            setGeneral(true);
            setOrganization(false);
          }}
        >
          General Donations
        </button>
      </div>
      {viewOrganization && <OrganizationCardParent />}
      {viewBlood && <BloodCardParent />}
      {viewGeneral && <RegularDonationParent />}
    </div>
  );
};

export default DonorDonatePage;
