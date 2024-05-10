import CaseCard from "./CaseCard";

const MedicalCases = () => {
	return (
		<div className="flex flex-col w-3/5 justify-center items-center gap-5 mb-3">
			<CaseCard
				name="John"
				description="Math Tutor"
				location="New York"
			/>
			<CaseCard
				name="kr"
				description="English Teacher"
				location="London"
			/>
			<CaseCard
				name="Michael"
				description="Science Instructor"
				location="San Francisco"
			/>
		</div>
	);
};

export default MedicalCases;
