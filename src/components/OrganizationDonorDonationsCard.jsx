/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import checkMark from "../assets/images/checkmark.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrganizationDonationDetails from "./OrganizationDonationDetails";

const OrganizationDonorDonationsCard = ({ name, date, category }) => {
	const [viewDetails, setView] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<div className="flex-row pt-5 pl-5 text-lg bg-white w-3/5 h-auto shadow-md">
				<div className="flex gap-5 mb-5">
					<div>Contributor: {name}</div>
					<button
						className="bg-primaryShades-500 rounded-sm px-2 py-0.5 text-xs"
						onClick={() => setView(true)}
					>
						View Details
					</button>
				</div>
				<div className="mb-5">Fulfillment Date: {date}</div>
				<div className="mb-5">Category: {category}</div>
				<div className="flex items-center justify-between mb-5 mr-5">
					<img
						src={checkMark}
						alt="Profile Icon"
						style={{
							width: "50px",
							height: "50px",
							marginTop: "20 px",
						}}
					/>
					<div className="flex gap-5">
						<button
							onClick={() => navigate("/organization/delivery")}
							className="bg-primaryShades-500 rounded-lg px-6 text-s"
						>
							Track
						</button>
						<button className="bg-red-500 rounded-lg px-6 text-s">
							Delete
						</button>
					</div>
				</div>
			</div>

			{viewDetails && <OrganizationDonationDetails setView={setView} />}
		</>
	);
};

export default OrganizationDonorDonationsCard;
