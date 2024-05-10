import { useState } from "react";
import OrganizationCard from "../components/OrganizationCard";
import filterIcon from "../assets/images/gand/filterr.jpeg"; // Assuming the image path is correct

const OrganizationAccount = () => {
	const [activeFilter, setActiveFilter] = useState(""); // State to track active filter
	const [searchText, setSearchText] = useState(""); // State to track search term
	const [showFilterOptions, setShowFilterOptions] = useState(false); // State to control filter options visibility

	const filterOptions = ["Government", "Area", "Organization Type"]; // Array of filter labels

	const handleFilterClick = (filter) => {
		setActiveFilter(filter);
		// Implement logic to filter organizations based on the selected filter (if needed)
	};

	const handleSearchChange = (event) => {
		setSearchText(event.target.value);
		// Implement logic to filter organizations based on the search term (if needed)
	};

	const toggleFilterOptions = () => {
		setShowFilterOptions(!showFilterOptions); // Toggle visibility on click
	};

	return (
		<div className="organization-account-container">
			<div className="my-3"></div>
			<main className="organization-account-content">
				<div className="flex flex-col justify-center items-center mb-6">
					<h1 className="text-xl font-bold text-center mr-4">
						Organization Account
					</h1>
				</div>

				<div className="flex mb-4 items-center">
					{/* Search bar with optional hover effect */}
					<div className="w-[80vw] mr-4 relative">
						<input
							type="text"
							placeholder="Search by Organizations"
							className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
							value={searchText}
							onChange={handleSearchChange}
						/>
						{/* Add hover effect for search bar (optional) */}
					</div>

					{/* Enhanced filter button with increased width and optional padding */}
					<div className="relative">
						<button
							className={`px-4 py-2 rounded-md text-sm font-medium bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
								activeFilter ? "bg-blue-500 text-white" : ""
							}`}
							onClick={toggleFilterOptions}
							style={{ minWidth: "120px", padding: "0 10px" }} // Set minimum width and optional padding
						>
							<span className="flex items-center gap-1">
								<img
									src={filterIcon}
									alt="Filter"
									className="w-4 h-4 mr-2"
								/>
								Filter by
							</span>
						</button>
						{showFilterOptions && (
							<div className="absolute top-full left-0 mt-1 p-2 rounded-md shadow-md bg-white z-50">
								<ul className="flex flex-col gap-1">
									{" "}
									{/* Use a list (`ul`) for vertical stacking */}
									{filterOptions.map((filter) => (
										<li
											key={filter}
											className="text-left hover:bg-gray-100"
										>
											<button
												onClick={() =>
													handleFilterClick(filter)
												}
											>
												{filter}
											</button>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				{/* Organization Cards, with increased vertical space */}
				<div>
					<div className="mb-4">
						<OrganizationCard />
					</div>
					<div className="mb-4">
						<OrganizationCard />
					</div>
					<div className="mb-4">
						<OrganizationCard />
					</div>
				</div>
			</main>
		</div>
	);
};

export default OrganizationAccount;
