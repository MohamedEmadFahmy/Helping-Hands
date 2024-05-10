/* eslint-disable react/prop-types */
import OrganizationDonorDonationsCard from "./OrganizationDonorDonationsCard";

const OrganizationDonations = () => {
	return (
		<div className="flex flex-col w-3/5 justify-center items-center gap-5">
			<OrganizationDonorDonationsCard
				name="Donation 1"
				date="2022-01-01"
				category="Category 1"
			/>
			<OrganizationDonorDonationsCard
				name="Donation 2"
				date="2022-02-01"
				category="Category 2"
			/>
			<OrganizationDonorDonationsCard
				name="Donation 3"
				date="2022-03-01"
				category="Category 3"
			/>
		</div>
	);
};

export default OrganizationDonations;
