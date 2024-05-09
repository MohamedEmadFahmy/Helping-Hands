import Hospital from '../assets/DonationCardsImages/Hospital.jfif';
import HospitalLogo from '../assets/DonationCardsImages/HospitalLogo.png';

const OrganizationDonationCard = () => {
  return (
    <div className="flex bg-white w-3/4 h-full shadow-md">
      <div className="flex-col w-2/5">
        <div className="flex gap-7 mt-5 ml-5 w-full">
          <div>
            <img
              src={HospitalLogo}
              alt="hospital logo"
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </div>
          <div className="flex-col space-y-10">
            <h1 className="text-3xl border-b border-gray-500">57357</h1>
            <h1 className="text-xl"> Cancer Research Hospital</h1>
            <h1 className="text-lg"> Egypt/Cairo</h1>
          </div>
        </div>

        <div className="flex justify-end mt-20">
          <button className="bg-primaryShades-500">View Details</button>
        </div>
      </div>

      <div className="w-3/5">
        <img
          src={Hospital}
          alt="organization"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default OrganizationDonationCard;
