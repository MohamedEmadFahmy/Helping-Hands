import PropTypes from 'prop-types';
import placeHolder from '../assets/images/logo.png';

const FulfilledDonationsCard = ({ setView }) => {
  return (
    <div className="flex-row pt-5 pl-5 text-lg bg-secondaryShades-500 w-4/5 h-64 shadow-md">
      <div className="flex gap-5 mb-5">
        <div>Contributor: Donor</div>
        <button
          className="bg-primaryShades-500 rounded-sm px-2 py-0.5 text-xs "
          onClick={() => setView(() => true)}
        >
          View Details
        </button>
      </div>
      <div className="mb-5 ">Fulfillment Date: 20/12/2002</div>
      <div className="mb-5 ">Category: Teaching</div>
      <div>
        <img
          src={placeHolder}
          alt="Profile Icon"
          style={{ width: '5%', height: '5%' }}
        ></img>
        <div className="flex justify-end gap-5 mb-5 mr-5">
          <button className="bg-primaryShades-500 rounded-lg px-6 text-s">
            Track
          </button>
          <button className="bg-red-500 rounded-lg px-6 text-s">Delete</button>
        </div>
      </div>
    </div>
  );
};

FulfilledDonationsCard.propTypes = {
  setView: PropTypes.func.isRequired, // Add setView to propTypes
};

export default FulfilledDonationsCard;
