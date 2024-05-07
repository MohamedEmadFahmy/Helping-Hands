import PropTypes from 'prop-types';
import placeHolder from '../assets/images/logo.png';

const FulfilledDonationsCard = ({ setView, onDelete }) => {
  const handleDelete = () => {
    // Call the onDelete function to delete the donation
    onDelete();
  };

  return (
    <div className="flex-row pt-5 pl-5 text-lg bg-white w-3/5 h-auto shadow-md">
      <div className="flex gap-5 mb-5">
        <div>Contributor: Donor</div>
        <button
          className="bg-primaryShades-500 rounded-sm px-2 py-0.5 text-xs"
          onClick={() => setView(true)}
        >
          View Details
        </button>
      </div>
      <div className="mb-5">Fulfillment Date: 20/12/2002</div>
      <div className="mb-5">Category: Teaching</div>
      <div className="flex items-center justify-between mb-5 mr-5">
        <img
          src={placeHolder}
          alt="Profile Icon"
          style={{ width: '50px', height: '50px', marginTop: '20 px' }}
        />
        <div className="flex gap-5">
          <button className="bg-primaryShades-500 rounded-lg px-6 text-s">
            Track
          </button>
          <button
            className="bg-red-500 rounded-lg px-6 text-s"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

FulfilledDonationsCard.propTypes = {
  setView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired, // Add onDelete to propTypes
};

export default FulfilledDonationsCard;
