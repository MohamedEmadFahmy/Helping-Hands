/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Filter = ({ allFilters, activeFilters, setActiveFilters }) => {
	const handleFilterChange = (e) => {
		const filter = e.target.name;
		const isChecked = e.target.checked;

		if (isChecked) {
			// If checkbox is checked, add the filter to activeFilters
			setActiveFilters([...activeFilters, filter]);
		} else {
			setActiveFilters(
				activeFilters.filter((option) => option !== filter)
			);
		}
	};

	return (
		<div className="flex flex-col bg-gray-200 h-1/3 p-5">
			<h1 className="text-white text-5xl">Filters</h1>

			<div>
				{allFilters.map((filter, index) => {
					return (
						<div key={index}>
							<input
								type="checkbox"
								name={filter}
								onChange={handleFilterChange}
								defaultChecked
							/>
							<label htmlFor={filter}>{filter}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Filter;
