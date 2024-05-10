/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const DonorAccountCard = ({
	accountImage,
	accountName,
	accountEmail,
	accountArea,
}) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const shortName =
		accountName.split(" ")[0] + " " + accountName.split(" ")[1];

	return (
		<div className="bg-gray-200 p-4 rounded-md w-2/3 flex flex-col justify-center">
			<div className="flex items-center gap-2">
				<img
					src={accountImage}
					alt="Donor Logo"
					className="w-10 h-10 rounded-full"
				/>
				<div>
					<p className="text-gray-800 font-medium">{shortName}</p>
					<p className="text-gray-600">{accountEmail}</p>
					<p className="text-gray-600">{accountArea}</p>
				</div>
			</div>
			<div className="mt-4 flex justify-between">
				<button
					className="px-4 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
					onClick={() => {
						setIsPopupOpen(true);
					}}
				>
					View Details
				</button>
				<button className="px-4 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-500">
					Delete Account
				</button>
			</div>

			{isPopupOpen && (
				<>
					<div className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-[60]"></div>
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50 z-[70]">
						<div className="bg-white rounded-3xl shadow-2xl p-6 w-1/3 h-3/12">
							<h1 className="text-lg font-semibold mb-4 underline">
								{accountName}
							</h1>

							<p className="mb-2">Email: {accountEmail}</p>
							<p className="mb-2">Area: {accountArea}</p>
							<button
								className="block w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
								onClick={() => setIsPopupOpen(false)}
							>
								Close
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default DonorAccountCard;
