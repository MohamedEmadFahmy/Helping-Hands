/* eslint-disable no-unused-vars */
import MedicalCases from "../components/MedicalCases";
import TeachingCases from "../components/TeachingCases";
import { useState } from "react";

const DonorVolunteerPage = () => {
	const [viewDoctor, setDoctor] = useState(false);

	return (
		<div className="h-[90vh] w-screen bg-secondaryShades-500 flex flex-col  items-center gap-10 overflow-y-scroll ">
			<div className="flex justify-start gap-5 mt-5 ">
				<button
					className="bg-primaryShades-500 rounded-lg px-10 py-2"
					onClick={() => {
						setDoctor(false);
					}}
				>
					Teaching Cases
				</button>
				<button
					className="bg-primaryShades-500 rounded-lg px-10 py-2"
					onClick={() => {
						setDoctor(true);
					}}
				>
					Medical Cases
				</button>
			</div>
			{viewDoctor ? <MedicalCases /> : <TeachingCases />}
		</div>
	);
};

export default DonorVolunteerPage;
