import placeHolder from '../assets/images/logo.png';

const DonorCard = () => {
  return (
    <div
      className="flex flex-col justify-center gap-5
       border border-gray-500 w-3/5 shadow-lg bg-white"
    >
      <div className="bg-gray-400 w-full text-lg font-bold p-3">
        Contributor Information
      </div>
      <div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
        <div>
          <img
            src={placeHolder}
            alt="Profile Icon"
            style={{ width: '25%', height: 'auto' }}
          ></img>
        </div>
        <div>Daddy Kr</div>
      </div>
      <div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
        <div>
          <img
            src={placeHolder}
            alt="Email Icon"
            style={{ width: '25%', height: 'auto' }}
          ></img>
        </div>
        <div>Daddy Kr@gmail</div>
      </div>
      <div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
        <div>
          <img
            src={placeHolder}
            alt="Phone number Icon"
            style={{ width: '25%', height: 'auto' }}
          ></img>
        </div>
        <div>01123232323</div>
      </div>
      <div className="flex justify-end mr-1">
        <button className="bg-primaryShades-500 px-4 rounded-sm mr-3 mb-3 ">
          Share Info
        </button>
      </div>
    </div>
  );
};

export default DonorCard;
