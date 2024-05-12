/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Filter from "../components/Filter";
import { useState } from "react";

const filterTest = () => {
	const allFilters = ["Regular Donors", "Teachers", "Doctors"];
	const [activeFilters, setActiveFilters] = useState([]);

	const filters = {
		Gender: {
			options: ["Male", "Female"],
		},
		Age: {
			options: ["Under 18", "18-30", "31-45", "Over 45"],
		},
		Location: {
			options: ["North", "South", "East", "West"],
			subcategories: {
				North: ["City A", "City B"],
				South: ["City C", "City D"],
				East: ["City E", "City F"],
				West: ["City G", "City H"],
			},
		},
	};

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Filter
				filters={filters}
				activeFilters={activeFilters}
				setActiveFilters={setActiveFilters}
			/>
		</div>
	);
};

export default filterTest;
