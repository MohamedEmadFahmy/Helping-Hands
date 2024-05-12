import DonationCreation from "../components/OrganizationDonationCreation";
import Footer from "../components/Footer";

const DonationCreationPage = () => {
	return (
		<>
			<div className="h-[90vh] w-full flex justify-center items-center bg-secondary">
				<DonationCreation />
			</div>
			<Footer/>
		</>
	);
};

export default DonationCreationPage;
