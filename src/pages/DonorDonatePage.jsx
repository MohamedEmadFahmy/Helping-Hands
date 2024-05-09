import BloodDonationCard from '../components/BloodDonationCard';
import OrganizationDonationCard from '../components/OrganizationDonationCard';
import RegularDonationCard from '../components/RegularDonationCard';

const DonorDonatePage = () => {
  return (
    <div className="h-[90vh] w-screen bg-secondaryShades-500 flex flex-col justify-center items-center gap-10 overflow-y-scroll">
      <div className="h-1/3 w-5/6 flex-col justify-center items-center overflow-y-scroll space-y-5">
        <OrganizationDonationCard />
      </div>
    </div>
  );
};

export default DonorDonatePage;
