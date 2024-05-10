import { useState } from "react";
import DonorAccCard from "../components/DonorAccCard";
import filterIcon from "../assets/images/gand/filterr.jpeg"; // Assuming the image path is correct

const DonorAccounts = () => {
	const [showFilterOptions, setShowFilterOptions] = useState(false);
	const filterOptions = ["Regular Donors", "Doctors", "Teachers"]; // Array of filter labels

	const toggleFilterOptions = () => {
		setShowFilterOptions(!showFilterOptions); // Toggle visibility on click
	};

	return (
		<div className="donor-accounts-container">
			<div className="flex bg-primary h-[10vh]"></div>
			<div className="my-3"></div>

			<header className="flex justify-center items-center mb-4">
				{/* Title */}
				<h1 className="text-xl font-bold text-center">
					Donor Accounts
				</h1>
			</header>

			{/* Filter button with options */}
			<div className="relative">
				<button
					className="flex items-center px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
					onClick={toggleFilterOptions}
				>
					{/* Filter icon inside the button */}
					<img
						src={filterIcon}
						alt="Filter"
						className="w-6 h-6 mr-2"
					/>
					<span className="mr-2">Filter by</span>
					<svg
						className="w-4 h-4 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						{/* Add your SVG icon here */}
					</svg>
				</button>

				{/* Filter options */}
				{showFilterOptions && (
					<div className="absolute mt-2 w-40 bg-white rounded-md shadow-md z-10">
						{filterOptions.map((filter) => (
							<button
								key={filter}
								className="block px-4 py-2 text-sm text-left hover:bg-gray-100 focus:outline-none"
								onClick={() => {
									// Handle filter option click
									console.log(`Filter clicked: ${filter}`);
								}}
							>
								{filter}
							</button>
						))}
					</div>
				)}
			</div>

			<div>
				{/* Add your <DonorAccCard /> components here */}
				<DonorAccCard />
				<DonorAccCard />
				<DonorAccCard />
				<DonorAccCard />
			</div>
		</div>
	);
};

export default DonorAccounts;
