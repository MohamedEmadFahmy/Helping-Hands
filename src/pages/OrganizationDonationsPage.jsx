import OrganizationDonations from "../components/OrganizationDonations";

const OrganizationDonationsPage = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-5 bg-secondaryShades-500 w-screen h-[90vh]">
			<h1 className="text-5xl text-black font-bold">Donations</h1>
			<OrganizationDonations />
		</div>
	);
};

export default OrganizationDonationsPage;
