/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DonorAccountCard from "../components/DonorAccountCard";
import image from "../assets/images/gand/G157357.jpeg";
import image2 from "../assets/images/gand/ahl.jpeg";

import { useEffect, useState } from "react";

import data from "../donor-accounts.json";

const DonorAccountCards = ({ activeFilters }) => {
	const images = [image, image2];

	// const getRandomImage = () => {
	// 	const randomIndex = Math.floor(Math.random() * images.length);
	// 	return images[randomIndex];
	// };

	const [accounts, setAccounts] = useState(data);

	const filteredAccounts = accounts.filter((account) => {
		return activeFilters.includes(account.accountType);
	});

	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5">
			{filteredAccounts.map((account) => (
				<DonorAccountCard
					key={account.id}
					accountName={account.name}
					accountEmail={account.email}
					accountArea={account.area}
					accountImage={account.id % 2 === 0 ? image : image2}
				/>
			))}
		</div>
	);
};

export default DonorAccountCards;
