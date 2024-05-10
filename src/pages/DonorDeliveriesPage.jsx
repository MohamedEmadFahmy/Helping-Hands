/* eslint-disable no-unused-vars */
import VolunteerCards from "../components/VolunteerCards";
import FilterOneButton from "../components/FilterOneButton";
import FilterTwoButton from "../components/FilterTwoButton";
const DonorDeliveriesPage = () => {
	return (
		<div className="h-[90vh] w-screen flex flex-col flex-justify-center items-center">
			{/* <FilterOneButton />
			<FilterTwoButton /> */}
			<VolunteerCards />
		</div>
	);
};

export default DonorDeliveriesPage;
