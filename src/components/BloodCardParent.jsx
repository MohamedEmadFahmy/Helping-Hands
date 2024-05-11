import DonationCard from './DonationCard';

const BloodCardParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <DonationCard
        field1="Organizaton"
        field2="Blood 1"
        field3="Location 1"
        isBlood={true}
      />
      <DonationCard
        field1="Organization 2"
        field2="Speciality 2"
        field3="Location 2"
        isBlood={true}
      />
      <DonationCard
        field1="Organization 3"
        field2="Speciality 3"
        field3="Location 3"
        isBlood={true}
      />
    </div>
  );
};

export default BloodCardParent;
