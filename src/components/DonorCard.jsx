// Component.js

const DonorCard = () => {
  return (
    <div
      className="flex flex-col justify-center gap-5
       border border-gray-500 w-4/5 shadow-lg"
    >
      <div className="bg-gray-400 w-full text-lg p-3">
        Contributor Information
      </div>
      <div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
        <div>image1</div>
        <div>Daddy Kr</div>
      </div>
      <div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
        <div>image2</div>
        <div>Daddy Kr@gmail</div>
      </div>
      <div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
        <div>image3</div>
        <div>01123232323</div>
      </div>
      <div className="flex justify-end mr-1">
        <button className="bg-primaryShades-500 px-4 rounded-lg ">
          Share Info
        </button>
      </div>
    </div>
  );
};

export default DonorCard;
