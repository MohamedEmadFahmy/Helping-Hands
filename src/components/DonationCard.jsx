/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import LocationPin from "../assets/DonationCardsImages/LocationPin.jfif";
import HospitalLogo from "../assets/DonationCardsImages/HospitalLogo.png";
import { useState } from "react";

const DonationCard = ({
	field1,
	field2,
	field3,
	field4,
	field5,
	field6,
	orgImg,
	itemImg,
	isBlood,
}) => {
	const [viewDonate, setDonate] = useState(false);
	const [quantity, setQuantity] = useState(0);

	return (
		<>
			<div className="flex bg-white w-full shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100 rounded-lg">
				<div className="flex flex-col w-full ">
					<div className="flex gap-7 pt-5 pl-5 w-full">
						<div>
							<img
								className="rounded-full w-[4rem] h-[4rem]"
								src={orgImg}
								alt="Profile Icon"
							/>
						</div>
						<div className="flex-col flex gap-6 ">
							<h1 className="text-3xl border-b border-gray-500">
								{field1}
							</h1>
							<h1 className="text-xl">{field2}</h1>
							<div className="flex gap-3">
								<img
									className="rounded-full w-[2rem] h-[2rem]"
									src={LocationPin}
									alt="Location Pin"
								/>
								<h1 className="text-lg">{field3}</h1>
							</div>
						</div>
					</div>
					<div className="flex justify-end pr-5 pb-5 gap-3">
						<button
							className="bg-primaryShades-500 rounded-md px-8 "
							onClick={() => setDonate(true)}
						>
							Donate
						</button>
					</div>
				</div>
			</div>

			{viewDonate && (
				<>
					<div className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-[60]"></div>
					<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-grey-800 bg-opacity-50 z-[70]">
						<div className="bg-white rounded-3xl shadow-2xl p-6 w-1/3 h-3/12">
							<h1 className="text-lg font-semibold mb-4 underline">
								{field1}
							</h1>
							<p className="mb-2">{`Urgency: ${field4}`}</p>
							<p className="mb-2">{`Description: ${field5}`}</p>
							<p className="mb-2">{`Quantity Needed: ${field6}`}</p>
							{!isBlood && (
								<img
									className="rounded-lg pt-5 w-[14rem] h-[12rem]"
									src={itemImg}
									alt="item picture"
								/>
							)}
							{isBlood && (
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.150465912957!2d31.438874664226326!3d29.988423417037883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d23fc96eed7%3A0x364e0a19bd725939!2sGUC%20gate%203!5e0!3m2!1sen!2seg!4v1715007489098!5m2!1sen!2seg"
									className="pt-5 pb-5 w-[30rem] h-[20rem]"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							)}
							{!isBlood && (
								<div className="flex justify-between mt-4">
									<div className="flex gap-3 justify-center items-center">
										<button
											className="px-3 text-3xl text-center hover:scale-110"
											onClick={() => {
												if (quantity > 0)
													setQuantity(quantity - 1);
											}}
										>
											-
										</button>
										<p className="text-xl">{quantity}</p>
										<button
											className="px-3 text-3xl text-center hover:scale-110"
											onClick={() =>
												setQuantity(quantity + 1)
											}
										>
											+
										</button>
									</div>
									<div>
										<button
											className="px-6 py-2 bg-green-500 text-white rounded-md mr-2 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
											onClick={() => {
												if (quantity > 0)
													setDonate(false);
											}}
										>
											Donate
										</button>
									</div>
								</div>
							)}
							<button
								className="block w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
								onClick={() => setDonate(false)}
							>
								Close
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default DonationCard;
