import DonationCreation from "../components/DonationCreation";
import OrganzationNavbar from "../components/OrganizationNavbar";

const DonationCreationPage = () => {
	return (
		<>
			<OrganzationNavbar />
			<div className="h-screen w-screen flex justify-center items-center bg-secondary">
				<DonationCreation />
			</div>
		</>
	);
};

export default DonationCreationPage;
