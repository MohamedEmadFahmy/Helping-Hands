// Page.js

import DonorCard from "../components/DonorCard";
import FulfilledDonationParent from "../components/FulfilledDonationParent";
import { useState } from "react";

const DonorDetails = () => {
	const [viewDetails, setView] = useState(false);

	return (
		<div className="flex-col justify-center items-center bg-secondaryShades-500 w-full h-screen overflow-y-scroll">
			<div className="flex flex-col items-center w-full h-3/5 p-10 gap-5">
				<FulfilledDonationParent setView={setView} />
			</div>
			{viewDetails && (
				<div className="absolute top-1/2 left-1/2 w-1/2 bg-red-500 transform -translate-x-1/2 -translate-y-1/2">
					<DonorCard setView={setView} />
				</div>
			)}
			;
		</div>
	);
};

export default DonorDetails;
