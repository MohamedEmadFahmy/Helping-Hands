import HospitalLogo from '../assets/DonationCardsImages/HospitalLogo.png';
import PropTypes from 'prop-types';

const BloodDonationCard = ({ hospitalName, name, bloodType, location }) => {
  return (
    <div className="flex flex-col bg-white w-1/3 shadow-md gap-5 ">
      <div className="flex gap-16 mt-5 ml-5 w-full">
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
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl border-b border-gray-500">{hospitalName}</h1>
          <h1 className="text-xl">{name}</h1>
          <h1 className="text-xl">Blood Type: {bloodType}</h1>
          <h1 className="text-xl">{location}</h1>
        </div>
      </div>

      <button className="bg-primaryShades-500 round-sm w-1/6 self-center mb-3">
        Donate
      </button>
    </div>
  );
};

BloodDonationCard.propTypes = {
  hospitalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bloodType: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default BloodDonationCard;
