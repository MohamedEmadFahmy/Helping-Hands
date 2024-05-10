import DonorDelivery from "../components/DonorDelivery";
import DonorNavbar from "../components/DonorNavbar";

const DonorDeliveryPage = () => {
	return (
		<>
			<DonorNavbar />
			<div className="h-screen w-screen flex justify-center items-center bg-secondary">
				<DonorDelivery />
			</div>
		</>
	);
};

export default DonorDeliveryPage;
