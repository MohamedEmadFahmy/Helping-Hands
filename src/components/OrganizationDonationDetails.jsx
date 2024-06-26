/* eslint-disable react/prop-types */

import email from "../assets/images/email.png";
import phoneImage from "../assets/images/phone.png";
import profileIcon from "../assets/DonationCardsImages/profileIcon.png";

const OrganizationDonorDetails = ({ setView }) => {
	return (
		<>
			<div className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-[60]"></div>
			<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50 z-[70]">
				<div className="w-[50rem] rounded-lg flex flex-col justify-center pt-6 border border-gray-500 shadow-lg bg-white z-[70] gap-2">
					<div className="bg-gray-400 w-full text-lg font-bold p-3">
						Contributor Information
					</div>
					<div className="flex pl-3 gap-10 pb-5 border-b-4 border-gray">
						<div>
							<img
								src={profileIcon}
								alt="Profile Icon"
								style={{ width: "25%", height: "auto" }}
							></img>
						</div>
						<div className="self-center">Mohamed Amr</div>
					</div>
					<div className="flex pl-3  pb-5 border-b-4 border-gray">
						<div>
							<img
								src={email}
								alt="Email Icon"
								style={{ width: "25%", height: "auto" }}
							></img>
						</div>
						<div className="self-center">
							moamedamr584@gmail.com
						</div>
					</div>
					<div className="flex pl-3 pb-5 border-b-4 border-gray">
						<div>
							<img
								src={phoneImage}
								alt="Phone number Icon"
								style={{ width: "25%", height: "auto" }}
							></img>
						</div>
						<div className="self-center">01123232323</div>
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
			</div>
		</>
	);
};

export default OrganizationDonorDetails;
