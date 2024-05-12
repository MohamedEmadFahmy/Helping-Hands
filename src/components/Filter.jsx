/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ filters, activeFilters, setActiveFilters }) => {
	const filters2 = {
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

	const isSubfilter = (mainFilter, subFilter) => {
		for (const filterCategory in filters) {
			if (filters[filterCategory].subcategories) {
				if (
					filters[filterCategory].subcategories[mainFilter].includes(
						subFilter
					)
				) {
					return true;
				}
			}
		}
		return false;
	};
	const isMainFilter = (filterName) => {
		for (const filterCategory in filters) {
			if (filters[filterCategory].subcategories) {
				if (filters[filterCategory].options.includes(filterName)) {
					return true;
				}
			}
		}
		return false;
	};

	const [expandedFilters, setExpandedFilters] = useState([]);

	const handleFilterChange = (e, filterCategory) => {
		const filter = e.target.name;
		const isChecked = e.target.checked;

		let updatedFilters;
		if (isChecked) {
			updatedFilters = [...activeFilters, filter];

			if (isMainFilter) {
				setExpandedFilters(expandedFilters.concat(filterCategory));
			}
		} else {
			updatedFilters = activeFilters.filter(
				(option) => option !== filter
			);
			if (isMainFilter(filter)) {
				updatedFilters = updatedFilters.filter(
					(option) => !isSubfilter(filter, option)
				);
				setExpandedFilters(expandedFilters.filter(filterCategory));
			}
		}

		setActiveFilters(updatedFilters);

		// Log the updated filters
		console.log(updatedFilters);
	};

	return (
		<div className="flex flex-col gap-5 items-center bg-gray-200 px-10 py-5 rounded-lg shadow-md">
			<h1 className="text-3xl font-bold">Filters</h1>
			<div id="filters-section">
				{Object.keys(filters).map((filterCategory) => (
					<div key={filterCategory} className="mb-4">
						<h2 className="text-gray-800 text-lg font-semibold">
							{filterCategory}
						</h2>
						<div className="ml-4">
							{filters[filterCategory].options.map((filter) => (
								<div key={filter} className="mb-2">
									<label className="flex items-center space-x-2">
										<input
											type="checkbox"
											name={filter}
											onChange={(e) =>
												handleFilterChange(
													e,
													filterCategory
												)
											}
											checked={activeFilters.includes(
												filter
											)}
											className="form-checkbox h-4 w-4 text-indigo-600"
										/>
										<span className="text-gray-800">
											{filter}
										</span>
									</label>
								</div>
							))}
						</div>
						{/* Render subfilters only if the main filter is selected */}
						{expandedFilters === filterCategory &&
							filters[filterCategory]?.subcategories && (
								<div className="ml-4 mt-2">
									{Object.keys(
										filters[filterCategory].subcategories
									).map((subfilterCategory) => (
										<div key={subfilterCategory}>
											<h3 className="text-gray-700 text-sm font-semibold">
												{subfilterCategory}
											</h3>
											<div className="ml-2">
												{filters[
													filterCategory
												].subcategories[
													subfilterCategory
												].map((subfilter) => (
													<div
														key={subfilter}
														className="mb-2"
													>
														<label className="flex items-center space-x-2">
															<input
																type="checkbox"
																name={subfilter}
																onChange={(e) =>
																	handleFilterChange(
																		e,
																		filterCategory
																	)
																}
																checked={activeFilters.includes(
																	subfilter
																)}
																className="form-checkbox h-4 w-4 text-indigo-600"
															/>
															<span className="text-gray-800">
																{subfilter}
															</span>
														</label>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Filter;
