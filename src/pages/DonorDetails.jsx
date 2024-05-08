// Page.js

import DonorCard from "../components/DonorCard";
import FulfilledDonationsCard from "../components/FulfilledDonationsCard";
import NavBar from "../components/NavBar";
import { useState } from "react";

const DonorDetails = () => {
	const [viewDetails, setView] = useState(false);

	return (
		<div className="flex-col justify-center items-center bg-secondaryShades-500 w-screen h-screen overflow-y-scroll">
			<NavBar />
			<div className="flex flex-col items-center w-full h-3/5 p-10 gap-5">
				<FulfilledDonationsCard setView={setView} />
				<FulfilledDonationsCard setView={setView} />
				<FulfilledDonationsCard setView={setView} />
				<FulfilledDonationsCard setView={setView} />
				<FulfilledDonationsCard setView={setView} />
			</div>
			{viewDetails && (
				// <div className="relative min-h-screen">
				<div className="absolute top-1/2 left-1/2 w-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-1/2">
					<DonorCard setView={setView} />
				</div>
				// </div>
			)}
			;
		</div>
	);
};

export default DonorDetails;
