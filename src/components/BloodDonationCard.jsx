import HospitalLogo from '../assets/DonationCardsImages/HospitalLogo.png';

const BloodDonationCard = () => {
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
          <h1 className="text-3xl border-b border-gray-500">57357</h1>
          <h1 className="text-xl ml-5">Mohamed Amr</h1>
          <h1 className="text-xl ml-5">Blood Type: A+</h1>
          <h1 className="text-xl ml-5">Cairo/Egypt</h1>
        </div>
      </div>

      <button className="bg-primaryShades-500 round-sm w-1/6 self-center mb-3">
        Donate
      </button>
    </div>
  );
};

export default BloodDonationCard;
