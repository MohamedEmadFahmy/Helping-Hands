/* eslint-disable react/prop-types */
import reactLogo from "../assets/images/react.png";

const DonorCard = ({ setView }) => {
	return (
		<div
			className="flex flex-col justify-center gap-5
       border border-gray-500  shadow-lg bg-white"
		>
			<div className="bg-gray-400 w-full text-lg font-bold p-3">
				Contributor Information
			</div>
			<div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
				<div>
					<img
						src={reactLogo}
						alt="Profile Icon"
						style={{ width: "25%", height: "auto" }}
					></img>
				</div>
				<div>Daddy Kr</div>
			</div>
			<div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
				<div>
					<img
						src={reactLogo}
						alt="Email Icon"
						style={{ width: "25%", height: "auto" }}
					></img>
				</div>
				<div>Daddy Kr@gmail</div>
			</div>
			<div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
				<div>
					<img
						src={reactLogo}
						alt="Phone number Icon"
						style={{ width: "25%", height: "auto" }}
					></img>
				</div>
				<div>01123232323</div>
			</div>
			<div className="flex justify-end mr-1">
				<button className="bg-primaryShades-500 px-4 rounded-sm mr-3 mb-3 ">
					Share Info
				</button>
			</div>
			<button
				onClick={() => setView(false)}
				className="bg-primaryShades-500 px-4 rounded-sm mr-3 mb-3 w-1/4 self-center "
			>
				Close
			</button>
		</div>
	);
};

export default DonorCard;
