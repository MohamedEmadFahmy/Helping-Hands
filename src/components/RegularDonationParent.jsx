import RegularDonationCard from './RegularDonationCard';

const RegularDonationParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5">
      <RegularDonationCard
        name="Donation 1"
        description="This is the first regular donation card"
        urgency="High"
        location="New York"
      />
      <RegularDonationCard
        name="Donation 2"
        description="This is the second regular donation card"
        urgency="Medium"
        location="Los Angeles"
      />
      <RegularDonationCard
        name="Donation 3"
        description="This is the third regular donation card"
        urgency="Low"
        location="Chicago"
      />
    </div>
  );
};

export default RegularDonationParent;
