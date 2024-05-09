import PropTypes from "prop-types";

const VolunterCardkr = ({ setView2 }) => {
  return (
    <div className="bg-white flex justify-between items-start w-3/4 h-1/4 shadow-2xl p-4 relative">
      <div className="absolute top-0 left-0">small image</div>
      <button className="absolute bottom-0 right-0">volunteer</button>
    </div>
  );
};

VolunterCardkr.propTypes = {
  setView2: PropTypes.func.isRequired,
};

export default VolunterCardkr;
