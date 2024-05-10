import BloodDonationCard from './BloodDonationCard';

const BloodCardParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <BloodDonationCard
        hospitalName="Hospital A"
        name="John Doe"
        bloodType="O+"
        location="City A"
      />
      <BloodDonationCard
        hospitalName="Hospital B"
        name="Jane Smith"
        bloodType="A-"
        location="City B"
      />
      <BloodDonationCard
        hospitalName="Hospital C"
        name="Mike Johnson"
        bloodType="B+"
        location="City C"
      />
    </div>
  );
};

export default BloodCardParent;
