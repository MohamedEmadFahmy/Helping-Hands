import Hospital from '../assets/DonationCardsImages/Hospital.jfif';
import HospitalLogo from '../assets/DonationCardsImages/HospitalLogo.png';
import PropTypes from 'prop-types';

const OrganizationDonationCard = ({ name, speciality, location }) => {
  return (
    <div className="flex bg-white w-5/6 h-auto shadow-md">
      <div className="flex flex-col w-2/5 gap-48">
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
            <h1 className="text-3xl border-b border-gray-500">{name}</h1>
            <h1 className="text-xl">{speciality}</h1>
            <h1 className="text-lg">{location}</h1>
          </div>
        </div>

        <div className="flex justify-end mt-5 mr-1">
          <button className="bg-primaryShades-500 round-sm px-8 ">
            Donate
          </button>
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

OrganizationDonationCard.propTypes = {
  name: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default OrganizationDonationCard;
