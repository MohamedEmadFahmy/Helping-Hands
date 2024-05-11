/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import pdf from "../assets/document.pdf";

const VolunterCard = ({
	submissionImage,
	submissionName,
	submissionEmail,
	submissionType,
	submissionSubject,
	submissionUsername,
	submissionDOB,
}) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleViewDetailsClick = () => {
		setIsPopupOpen(true);
	};
	const handleViewDocumentsClick = () => {
		// Open the provided URL in a new tab
		window.open(
			pdf,
			"_blank" // Opens the URL in a new tab
		);
	};

	return (
		<>
			<div className="flex flex-col bg-white rounded-md shadow-md p-4 relative w-3/5">
				<div
					alt=""
					className="w-[4rem] h-[4rem] rounded-full bg-cover bg-center"
					style={{
						backgroundImage: `url(${submissionImage})`,
					}}
				/>

				<div className="pl-20 flex flex-col relative">
					<h3 className="text-lg font-medium mb-1 underline mr-auto">
						{submissionName.split(" ")[0] +
							" " +
							submissionName.split(" ")[1]}
					</h3>

					<p className="text-gray-600 mb-1">{submissionEmail}</p>
					<p className="text-gray-600 mb-1">{submissionType}</p>
					<p className="text-gray-600 mb-1">{submissionSubject}</p>
				</div>

				<div className="flex items-center mt-2">
					<button
						className="ml-auto px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						onClick={handleViewDetailsClick}
					>
						View Submission Details
					</button>
				</div>
			</div>

			{isPopupOpen && (
				<>
					<div className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-[60]"></div>
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50 z-[70]">
						<div className="bg-white rounded-3xl shadow-2xl p-6 w-1/3 h-3/12">
							<h1 className="text-lg font-semibold mb-4 underline">
								{submissionName}
							</h1>
							<p className="mb-2">{`Username: ${submissionUsername}`}</p>
							<p className="mb-2">{`Date of Birth: ${submissionDOB}`}</p>
							<p className="mb-2">{submissionEmail}</p>
							<div className="flex justify-between mt-4">
								<button
									className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800"
									onClick={() => handleViewDocumentsClick()}
								>
									View Submitted Documents
								</button>
								<div>
									<button
										className="px-4 py-2 bg-green-500 text-white rounded-md mr-2 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
										onClick={() => setIsPopupOpen(false)}
									>
										Accept
									</button>
									<button
										className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-red-500"
										onClick={() => setIsPopupOpen(false)}
									>
										Reject
									</button>
								</div>
							</div>
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
		</>
	);
};

export default VolunterCard;
