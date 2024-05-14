/* eslint-disable no-unused-vars */
import { useState } from "react";
import DonorAccountCards from "../components/DonorAccountCards";
import filterIcon from "../assets/images/gand/filterr.jpeg"; // Assuming the image path is correct
import Filter from "../components/Filter";

const DonorAccounts = () => {
	const allFilters = ["Regular Donors", "Teachers", "Doctors"];
	const [activeFilters, setActiveFilters] = useState(allFilters);

	const [showFilterOptions, toggleFilterOptions] = useState(false);

	return (
		<div className=" bg-primaryShades-200 p-10 gap-10 min-h-[90vh] w-full flex flex-col items-center justify-center">
			<h1 className="text-5xl font-bold text-center font-mono text-white">
				Donor Accounts
			</h1>
			<div className="w-full flex justify-between p-10 pt-0">
				{/* <Filter
					filters={filters}
					activeFilters={activeFilters}
					setActiveFilters={setActiveFilters}
				/> */}
				<div className="">
					<button
						className="flex items-center px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
						onClick={() => toggleFilterOptions(!showFilterOptions)}
					>
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
						></svg>
					</button>

					{showFilterOptions && (
						<div className="absolute mt-2 w-40 bg-white rounded-md shadow-md z-10">
							{allFilters.map((filter) => (
								<button
									key={filter}
									className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded-md"
									onClick={() => {
										// Handle filter option click
										toggleFilterOptions(false);
									}}
								>
									{filter}
								</button>
							))}
						</div>
					)}
				</div>
				<DonorAccountCards allFilters={allFilters} />
			</div>
		</div>
	);
};

export default DonorAccounts;

{
	/* Filter button with options */
}
{
	/* <div className="">
				<button
					className="flex items-center px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
					onClick={toggleFilterOptions}
				>
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
					></svg>
				</button>

				{showFilterOptions && (
					<div className="absolute mt-2 w-40 bg-white rounded-md shadow-md z-10">
						{filterOptions.map((filter) => (
							<button
								key={filter}
								className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 rounded-md"
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
			</div> */
}
