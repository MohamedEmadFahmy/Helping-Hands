import DonationCard from './DonationCard';

const RegularDonationParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <DonationCard
        field1="Donation 1"
        field2="This is the first regular donation card"
        field3="New York"
      />
      <DonationCard
        field1="Donation 2"
        field2="This is the second regular donation card"
        field3="Los Angeles"
      />
      <DonationCard
        field1="Donation 3"
        field2="This is the third regular donation card"
        field3="Chicago"
      />
    </div>
  );
};

export default RegularDonationParent;
