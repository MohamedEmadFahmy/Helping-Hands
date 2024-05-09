import BloodDonationCard from '../components/BloodDonationCard';
import OrganizationDonationCard from '../components/OrganizationDonationCard';
import RegularDonationCard from '../components/RegularDonationCard';

const DonorDonatePage = () => {
  return (
    <div className="h-[90vh] w-screen bg-secondaryShades-500 flex-col space-y-10 overflow-y-scroll">
      <div className="h-1/3 flex justify-center mt-5">
        <BloodDonationCard />
      </div>
      <div className="h-1/3 flex justify-center ">
        <OrganizationDonationCard />
      </div>
      <div className="h-1/3 flex justify-center">
        <RegularDonationCard />
      </div>
    </div>
  );
};

export default DonorDonatePage;
