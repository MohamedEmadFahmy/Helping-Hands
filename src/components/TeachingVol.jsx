import PropTypes from 'prop-types';
import profileIcon from '../assets/DonationCardsImages/profileIcon.png';

const TeachingVol = ({ name, description, location }) => {
  return (
    <div className="flex flex-col bg-white w-1/3 shadow-md gap-5 ">
      <div className="flex gap-16 mt-5 ml-5 w-full">
        <div>
          <img
            className="rounded-full"
            src={profileIcon}
            alt="profile icon"
            style={{
              width: '50px',
              height: '50px',
            }}
          />
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl border-b border-gray-500">{name}</h1>
          <h1 className="text-xl">{description}</h1>
          <h1 className="text-xl">Location: {location}</h1>
        </div>
      </div>

      <button className="bg-primaryShades-500 round-sm w-1/6 self-center mb-3">
        Donate
      </button>
    </div>
  );
};

TeachingVol.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default TeachingVol;
