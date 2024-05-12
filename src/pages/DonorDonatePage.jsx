/* eslint-disable no-unused-vars */
import BloodCardParent from "../components/BloodCardParent";
import OrganizationCardParent from "../components/OrganizationCardParent";
import RegularDonationParent from "../components/RegularDonationParent";
import { useState } from "react";

const DonorDonatePage = () => {
	const [viewBlood, setBlood] = useState(false);
	const [viewGeneral, setGeneral] = useState(true);
	const [viewOrganization, setOrganization] = useState(false);
	const [activeButton, setActiveButton] = useState("General Donations");

	const [activeFilters, setActiveFilters] = useState([]);

	const [activeCategories, setActiveCategories] = useState([]);

	const donationTypes = [
		"Clothes",
		"School Supplies",
		"Toys",
		"Food",
		"Medical Supplies",
		"Medication",
		"Blood Donation",
	];

	const generateCheckBoxes = (category) => {
		let clothesOptions = [
			{
				label: "Age",
				values: ["Kids", "Adults"],
			},
			{
				label: "Gender",
				values: ["Male", "Female"],
			},
			{
				label: "Season",
				values: ["Summer", "Winter", "Autumn", "Spring"],
			},
		];

		let toysOptions = [
			{
				label: "Age Group",
				values: ["0-3 years", "4-7 years", "8-12 years", "13-18 years"],
			},
			{
				label: "Gender",
				values: ["Male", "Female"],
			},
			{
				label: "Category",
				values: [
					"Board Games",
					"Stuffed Toys",
					"Dolls",
					"Sports",
					"Cars",
					"Outdoor",
				],
			},
		];

		let options = toysOptions;

		return options.map((option, index) => (
			<div
				key={index}
				className="mt-3 mb-3 bg-red-200 flex flex-col items-center justify-center"
			>
				<label>{option.label}</label>
				<div className="flex gap-2">
					{option.values.map((value, index) => (
						<label key={index}>
							<input
								type="checkbox"
								value={value}
								onClick={handleCategoryClick}
							/>
							{value}
						</label>
					))}
				</div>
			</div>
		));
	};

	const handleCategoryClick = (e) => {
		const categoryName = e.target.value;

		let updatedCategories;
		if (activeCategories.includes(categoryName)) {
			updatedCategories = activeCategories.filter(
				(item) => item !== categoryName
			);
		} else {
			updatedCategories = [...activeCategories, categoryName];
		}
		setActiveCategories(updatedCategories);

		console.log(updatedCategories);
	};

	return (
		<div className="min-h-[90vh] w-full bg-secondaryShades-500 flex flex-col  items-center gap-10">
			<div className="flex justify-start gap-8 mt-5 ">
				{/* <button
					className={`${
						activeButton === "General Donations" &&
						"scale-110 drop-shadow-lg"
					} bg-primaryShades-500 rounded-lg px-10 py-2`}
					onClick={() => {
						setBlood(false);
						setGeneral(true);
						setOrganization(false);
						setActiveButton("General Donations");
					}}
				>
					General Donations
				</button>
				<button
					className={`${
						activeButton === "Blood Donations" &&
						"scale-110 drop-shadow-lg"
					} bg-primaryShades-500 rounded-lg px-10 py-2`}
					onClick={() => {
						setBlood(true);
						setGeneral(false);
						setOrganization(false);
						setActiveButton("Blood Donations");
					}}
				>
					Blood Donations
				</button>
				<button
					className={`${
						activeButton === "Organization Donations" &&
						"scale-110 drop-shadow-lg"
					} bg-primaryShades-500 rounded-lg px-10 py-2`}
					onClick={() => {
						setBlood(false);
						setGeneral(false);
						setOrganization(true);
						setActiveButton("Organization Donations");
					}}
				>
					Organization Donations
				</button> */}
			</div>
			<div className="bg-red-200 w-4/5 flex justify-around gap-10">
				<div className="w-2/5 h-screen bg-orange-200 flex flex-col items-center">
					<div className="h-auto bg-gray-200 w-2/3 flex flex-col items-center justify-center gap-10 rounded-lg p-10">
						<h1 className="text-black text-5xl">Filter</h1>
						<div className="flex flex-col items-center justify-center">
							{donationTypes.map((request, index) => (
								<div key={index}>
									<label className="text-black flex items-center justify-center">
										<input
											type="checkbox"
											value={request}
											className="mr-2"
											onClick={handleCategoryClick}
											checked={activeCategories.includes(
												request
											)}
										/>
										{request}
									</label>
									{activeCategories.includes(request) &&
										generateCheckBoxes(request)}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="w-3/5 h-auto">
					{viewOrganization && <OrganizationCardParent />}
					{viewBlood && <BloodCardParent />}
					{viewGeneral && <RegularDonationParent />}
				</div>
			</div>
		</div>
	);
};

export default DonorDonatePage;
