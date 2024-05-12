/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Filter from "../components/Filter";
import { useState } from "react";
import filterData from "../data.json";

const filterTest = () => {
	const [data, setData] = useState(filterData);
	const [activeFilters, setActiveFilters] = useState([]);

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Filter
				data={data}
				activeFilters={activeFilters}
				setActiveFilters={setActiveFilters}
			/>
		</div>
	);
};

export default filterTest;
