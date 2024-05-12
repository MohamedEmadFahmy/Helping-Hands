/* eslint-disable no-unused-vars */

import DonorVolunteerRegister from "../components/DonorVolunteerRegister";
import MedicalCases from "../components/MedicalCases";
import TeachingCases from "../components/TeachingCases";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonorVolunteerPage = () => {
	const [isDoctor, setDoctor] = useState(false);
	const [isTeacher, setTeacher] = useState(false);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const registrationSuccess = searchParams.get("registrationSuccess");

	useEffect(() => {
		if (registrationSuccess === "true") {
			toast.success("Registration Successful");
		}
	}, [registrationSuccess]);

	// const [viewDoctor, setDoctor] = useState(isDoctor);
	// const [viewTeacher, setTeacher] = useState(isTeacher);

	return (
		<div className=" min-h-[90vh] w-full bg-secondaryShades-500 flex flex-col items-center gap-10 ">
			<div className="flex justify-start gap-5 mt-5 ">
				{isDoctor && (
					<button className="bg-primaryShades-500 rounded-lg px-10 py-2">
						Medical Cases
					</button>
				)}
				{isTeacher && (
					<button className="bg-primaryShades-500 rounded-lg px-10 py-2">
						Teaching Cases
					</button>
				)}
			</div>

			{isDoctor && <MedicalCases />}
			{isTeacher && <TeachingCases />}

			{!isDoctor && !isTeacher && (
				<DonorVolunteerRegister
					setDoctor={setDoctor}
					setTeacher={setTeacher}
				/>
			)}
		</div>
	);
};

export default DonorVolunteerPage;
