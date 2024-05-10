import { useState } from "react";

const FilterResultsButton = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const options = [
		"School Supplies",
		"Accommodation",
		"Food",
		"Toys",
		"Medical Supplies",
		"Clothes",
		"Appliances",
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative text-left w-[120px]">
			<button
				onClick={toggleMenu}
				type="button"
				className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			>
				Filter Results
				<svg
					className="-mr-1 ml-2 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M10 12a2 2 0 100-4 2 2 0 000 4z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M4.293 8.293a1 1 0 011.414-1.414L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 01-1.414 0 1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			{isMenuOpen && (
				<div
					className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabIndex="-1"
				>
					<div className="py-1" role="none">
						{options.map((option, index) => (
							<button
								key={index}
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
								role="menuitem"
								tabIndex="-1"
								id={`menu-option-${index}`}
								onClick={() =>
									console.log(`Option selected: ${option}`)
								}
							>
								{option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterResultsButton;
