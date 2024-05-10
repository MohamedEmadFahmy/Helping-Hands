import OrganizationDonationCard from './OrganizationDonationCard';

const OrganizationCardParent = () => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
      <OrganizationDonationCard
        name="Organization 1"
        speciality="Speciality 1"
        location="Location 1"
      />
      <OrganizationDonationCard
        name="Organization 2"
        speciality="Speciality 2"
        location="Location 2"
      />
      <OrganizationDonationCard
        name="Organization 3"
        speciality="Speciality 3"
        location="Location 3"
      />
    </div>
  );
};

export default OrganizationCardParent;
