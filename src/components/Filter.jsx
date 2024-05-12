/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { parse } from "postcss";
import React, { useState, useEffect } from "react";

const YourComponent = ({ data, activeFilters, setActiveFilters }) => {
	const [categories, setCategories] = useState([]);

	const parseData = (data) => {
		data.array.forEach((entry) => {
			const category = entry.tags.Category;

			if (!categories.includes(category)) {
				categories.push(category);
			} else {
				const parameters = Object.entries(entry.tags).filter(
					([key, value]) => key !== "Category"
				);

				parameters.forEach((parameter) => {});

				categories.push(parameters);
			}
		});
	};

	// useEffect(() => {
	// 	const allCategories = data.reduce((accumulator, item) => {
	// 		const category = item.tags.Category;
	// 		const parameters = Object.entries(item.tags)
	// 			.filter(([key, value]) => key !== "Category")
	// 			.reduce((paramsAccumulator, [key, value]) => {
	// 				if (!paramsAccumulator[key]) {
	// 					paramsAccumulator[key] = [];
	// 				}
	// 				if (!paramsAccumulator[key].includes(value)) {
	// 					paramsAccumulator[key].push(value);
	// 				}
	// 				return paramsAccumulator;
	// 			}, {});

	// 		if (!accumulator[category]) {
	// 			accumulator[category] = { Category: category, parameters };
	// 		}

	// 		return accumulator;
	// 	}, {});

	// 	const categoriesArray = Object.values(allCategories);

	// 	setCategories(categoriesArray);
	// }, []);

	console.log(categories);

	return (
		<div>
			<h2>Categories</h2>
			<ul>
				{categories.map((category, index) => (
					<li key={index}>
						{category.Category}
						<ul>
							{Object.entries(category.parameters).map(
								([parameter, values], index) => (
									<li key={index}>
										{parameter}: {values.join(", ")}
									</li>
								)
							)}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default YourComponent;
