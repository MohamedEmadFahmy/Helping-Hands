import FulfilledDonationsCard from './FulfilledDonationsCard';
import PropTypes from 'prop-types';

const FulfilledDonationParent = ({ setView }) => {
  return (
    <div className="flex flex-col w-3/5 justify-center items-center gap-5">
      <FulfilledDonationsCard
        setView={setView}
        name="Donation 1"
        date="2022-01-01"
        category="Category 1"
      />
      <FulfilledDonationsCard
        setView={setView}
        name="Donation 2"
        date="2022-02-01"
        category="Category 2"
      />
      <FulfilledDonationsCard
        setView={setView}
        name="Donation 3"
        date="2022-03-01"
        category="Category 3"
      />
    </div>
  );
};

FulfilledDonationParent.propTypes = {
  setView: PropTypes.string.isRequired,
};

export default FulfilledDonationParent;
