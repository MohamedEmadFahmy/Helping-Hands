/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import DonorAccountCard from "../components/DonorAccountCard";
import image from "../assets/images/gand/gando.jpg";
import image2 from "../assets/images/gand/ghrz.jpg";
import image3 from "../assets/images/gand/cccpa1.jpeg";
import image4 from "../assets/images/gand/kr.jpg";

import { useState } from "react";

import data from "../donor-accounts.json";

const DonorAccountCards = ({ activeFilters }) => {
	const images = [image, image2];

	// const getRandomImage = () => {
	// 	const randomIndex = Math.floor(Math.random() * images.length);
	// 	return images[randomIndex];
	// };
	console.log(data);

	const [accounts, setAccounts] = useState(data);

	const deleteAccount = (id) => {
		const updatedAccounts = accounts.filter((account) => account.id !== id);
		setAccounts(updatedAccounts);
		console.log("Deleted", id);
	};

	// const filteredAccounts = accounts.filter((account) => {
	// 	return activeFilters.includes(account.accountType);
	// });

	return (
		<div className="flex flex-col items-center justify-center w-10/12 h-full gap-5 ">
			{data.map((account) => (
				<DonorAccountCard
					key={account.id}
					accountId={account.id}
					accountName={account.name}
					accountEmail={account.email}
					accountArea={account.area}
					accountImage={account.id % 2 === 0 ? image : image2}
					accountType={account.accountType}
					accountPhoneNumber={account.phoneNumber}
					deleteAccount={deleteAccount}
				/>
			))}
		</div>
	);
};

export default DonorAccountCards;
