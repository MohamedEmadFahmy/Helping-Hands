import VolunteerCard from "../components/VolunteerCard";
import poorChildrenPhoto from "../assets/images/poor-children.jpg";

const VolunteerCards = () => {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center gap-10 bg-primaryShades-100">
			<VolunteerCard
				submissionImage={poorChildrenPhoto}
				submissionName={"Kareem Khalid Radwan Abdulhamed"}
				submissionEmail={"Kerr@gmail.com"}
				submissionType={"Teacher Request"}
				submissionSubject={"Math"}
				submissionUsername={"kerrawy"}
				submissionDOB={"01/02/2003"}
			/>
			<VolunteerCard
				submissionImage={poorChildrenPhoto}
				submissionName={"Mohamed Emad Ahmed Fahmy"}
				submissionEmail={"moski@gmail.com"}
				submissionType={"Doctor Request"}
				submissionSubject={"Sick"}
				submissionUsername={"moskito"}
				submissionDOB={"03/09/2003"}
			/>
		</div>
	);
};

export default VolunteerCards;
