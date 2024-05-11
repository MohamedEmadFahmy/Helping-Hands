import DonationCard from './DonationCard';
import HospitalLogo from '../assets/DonationCardsImages/HospitalLogo.png';

const OrganizationCardParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <DonationCard
        field1="57357"
        field2="Medical Blankets"
        field3="New Cairo"
        field4="Low"
        field5="Need blankets for patients"
        field6="100"
        orgImg={HospitalLogo}
      />
      <DonationCard
        field1="Organization 2"
        field2="Speciality 2"
        field3="Location 2"
      />
      <DonationCard
        field1="Organization 3"
        field2="Speciality 3"
        field3="Location 3"
      />
    </div>
  );
};

export default OrganizationCardParent;
