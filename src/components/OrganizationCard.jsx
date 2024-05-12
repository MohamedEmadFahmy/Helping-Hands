/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const OrganizationCard = ({
	isAdmin,
	OrganizationIndex,
	OrganizationImage,
	OrganizationName,
	OrganizationType,
	OrganizationArea,
	OrganizationPhoneNumber,
	handleDelete,
}) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const shortName = OrganizationName;

	return (
		<div
			className={`bg-gray-200 p-4 rounded-md flex flex-col justify-center ${
				isAdmin ? "w-2/3" : "w-1/2"
			}`}
		>
			<div className="flex items-center gap-2">
				<img
					src={OrganizationImage}
					alt="Donor Logo"
					className="w-14 h-14 rounded-full"
				/>
				<div>
					<p className="text-gray-800 font-medium">{shortName}</p>
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
				{isAdmin && (
					<button
						onClick={() => handleDelete(OrganizationIndex)}
						className="px-4 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-red-500"
					>
						Delete Account
					</button>
				)}
			</div>

			{isPopupOpen && (
				<>
					<div className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-[60]"></div>
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50 z-[70]">
						<div className="bg-white rounded-3xl shadow-2xl p-6 w-1/3 h-3/12">
							<h1 className="text-lg font-semibold mb-4 underline">
								{OrganizationName}
							</h1>

							<p className="mb-2">Type: {OrganizationType}</p>
							<p className="mb-2">Area: {OrganizationArea}</p>
							<p className="mb-2">
								Organization Phone: {OrganizationPhoneNumber}
							</p>
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

export default OrganizationCard;
