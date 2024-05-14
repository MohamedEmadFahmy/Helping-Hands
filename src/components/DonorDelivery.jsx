/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DonorDelivery = () => {
	const allDeliveryStates = [
		"NoDonation",
		"UpcomingDelivery",
		"DeliveryOnTheWay",
	];

	const handleFormSubmission = () => {
		if (deliveryDate == "" || deliveryTime == "" || deliveryVehicle == "") {
			alert("Fill in the proper information");
			return;
		}
		setComingFromDonate(false);
		setDeliveryState("DeliveryOnTheWay");
		calculateETA();
	};

	const navigate = useNavigate();

	// const [deliveryState, setDeliveryState] = useState(() => {
	//     const randomIndex = Math.floor(Math.random() * allDeliveryStates.length);
	//     return allDeliveryStates[randomIndex];
	// });

	// const [hasOrderedDonations, setHasOrderedDonations] = useState(() => {
	//     return Math.random() >= 0.5;
	// });

	const [deliveryState, setDeliveryState] = useState();
	const [hasOrderedDonations, setHasOrderedDonations] = useState(false);
	const [deliveryDate, setDeliveryDate] = useState("");
	const [deliveryTime, setDeliveryTime] = useState("");
	const [deliveryVehicle, setDeliveryVehicle] = useState("");
	const [eta, setETA] = useState("");
	const [daysToDelivery, setdaysToDelivery] = useState("");
	const [comingFromDonate, setComingFromDonate] = useState(false);

	const handleOrderDonations = () => {
		setHasOrderedDonations(true);
		calculateETA();
	};

	const handleDeliveryDateChange = (e) => {
		setDeliveryDate(e.target.value);
		calculateETA();
	};

	const handleDeliveryTimeChange = (e) => {
		setDeliveryTime(e.target.value);
		calculateETA();
	};

	const handleDeliveryVehicleChange = (e) => {
		setDeliveryVehicle(e.target.value);
	};

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const registrationSuccess = searchParams.get("isDonate");

	useEffect(() => {
		if (registrationSuccess === "true") {
			setComingFromDonate(true);
		}
	}, [registrationSuccess]);

	useEffect(() => {
		calculateETA();
	}, [deliveryDate, deliveryTime]); // Recalculate ETA when delivery date or time changes

	useEffect(() => {
		if (!comingFromDonate) {
			const randomIndex = Math.floor(
				Math.random() * allDeliveryStates.length
			);
			setDeliveryState(allDeliveryStates[randomIndex]);
		}
	}, []);

	useEffect(() => {
		// Set initial delivery date to one day after today
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		const tomorrowDateString = tomorrow.toISOString().split("T")[0];
		setDeliveryDate(tomorrowDateString);

		// Set initial delivery time to three hours earlier than now
		const threeHoursEarlier = new Date();
		threeHoursEarlier.setHours(threeHoursEarlier.getHours() - 3);
		const threeHoursEarlierTimeString = threeHoursEarlier
			.toISOString()
			.split("T")[1]
			.slice(0, 5);
		setDeliveryTime(threeHoursEarlierTimeString);
	}, []);

	const handleSwitchState = () => {
		switch (deliveryState) {
			case "NoDonation":
				setDeliveryState("UpcomingDelivery");
				break;
			case "UpcomingDelivery":
				setDeliveryState("DeliveryOnTheWay");
				break;
			case "DeliveryOnTheWay":
				setDeliveryState("NoDonation");
				break;
			default:
				break;
		}
	};

	const calculateETA = () => {
		const deliveryDateTime = new Date(`${deliveryDate}T${deliveryTime}`);
		const currentDateTime = new Date();

		const timeDifferenceMs = deliveryDateTime - currentDateTime;
		const timeDifferenceMin = Math.round(timeDifferenceMs / 60000);

		const oneDayInMinutes = 24 * 60;
		const isWithin24Hours = timeDifferenceMin < oneDayInMinutes;

		const hours = Math.floor(timeDifferenceMin / 60);
		const minutes = timeDifferenceMin % 60;

		const formattedETA = `${hours} hours ${minutes} minutes`;

		const daysLeft = Math.floor(hours / 24);

		setdaysToDelivery(daysLeft);

		setETA(formattedETA);

		if (deliveryState != "NoDonation") {
			if (isWithin24Hours) {
				setDeliveryState("DeliveryOnTheWay");
			} else {
				setDeliveryState("UpcomingDelivery");
			}
		}
	};

	return (
		<div className="p-4 w-full h-screen flex flex-col justify-center items-center">
			{comingFromDonate ? (
				<div className="flex flex-col shadow-md bg-gray-200 w-3/4 items-center justify-center">
					<form className="p-8">
						<h1 className="text-4xl font-bold mb-8">
							Order Donations Delivery
						</h1>
						<div className="mb-4">
							<p className="text-lg font-semibold">
								Donation Type: Medical Supplies
							</p>
						</div>
						<div className="mb-4">
							<p className="text-lg font-semibold">
								Quantity: 10 Pcs
							</p>
						</div>
						<div className="mb-4">
							<label
								htmlFor="deliveryDate"
								className="text-lg font-semibold"
							>
								Delivery Date:
							</label>
							<input
								required
								type="date"
								id="deliveryDate"
								value={deliveryDate}
								onChange={handleDeliveryDateChange}
								className="ml-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
							/>
						</div>
						<div className="mb-8">
							<label
								htmlFor="deliveryTime"
								className="text-lg font-semibold"
							>
								Delivery Time:
							</label>
							<input
								required
								type="time"
								id="deliveryTime"
								value={deliveryTime}
								onChange={handleDeliveryTimeChange}
								className="ml-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
							/>
						</div>
						<div className="mb-8">
							<label
								htmlFor="deliveryVehicle"
								className="text-lg font-semibold"
							>
								Delivery Vehicle:
							</label>
							<select
								name="Delivery Vehicle"
								value={deliveryVehicle}
								onChange={handleDeliveryVehicleChange}
								className="ml-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
							>
								<option value="">
									Select Delivery Vehicle
								</option>
								<option value="Sedan">Sedan</option>
								<option value="Motorcycle">Motorcycle</option>
								<option value="Pickup Truck">
									Pickup Truck
								</option>
								<option value="Van">Van</option>
							</select>
						</div>
					</form>
					<div className="flex w-full">
						<button
							type="button"
							className="h-10 justify-start bg-red-500 ml-10 mb-4 mr-20 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
							onClick={() => {
								navigate("/donor/donate");
							}}
						>
							Back to Donations
						</button>
						<button
							onClick={() => {
								handleFormSubmission();
							}}
							type="button"
							className="bg-blue-500 mb-4 ml-72 w-60 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Order Delivery
						</button>
					</div>
				</div>
			) : (
				<>
					{deliveryState === "NoDonation" && (
						<div className="flex shadow-md bg-gray-200 w-3/4 items-center justify-center">
							<h1 className="text-4xl font-bold m-8">
								You Have No Donations to Deliver!
							</h1>
						</div>
					)}
					{deliveryState === "UpcomingDelivery" && (
						<div className="flex flex-col shadow-md bg-gray-200 w-3/4 items-center justify-center">
							<h1 className="text-4xl font-bold m-8">
								A delivery driver will be dispatched to your
								location in {daysToDelivery} day(s)
							</h1>
							<div className="p-4">
								<h2 className="font-bold mb-4 text-3xl">
									Pickup Information
								</h2>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										Driver Name: John Doe
									</p>
								</div>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										Phone Number: +1234567890
									</p>
								</div>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										Vehicle Type: {deliveryVehicle}
									</p>
								</div>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										Vehicle model: Red Nissan Sunny
									</p>
								</div>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										Donation Type: Medical Supplies
									</p>
								</div>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										Quantity: 10 Pcs
									</p>
								</div>
								<div className="mb-2">
									<p className="text-gray-600 font-semibold text-lg">
										ETA: {eta}
									</p>
								</div>
							</div>
						</div>
					)}
					{deliveryState === "DeliveryOnTheWay" && (
						<>
							<h1 className="text-4xl font-bold m-8">
								A delivery driver is on their way to pick up
								your donation
							</h1>
							<div className="flex shadow-md bg-gray-200 w-3/4">
								<div className="p-4 mb-4">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.150465912957!2d31.438874664226326!3d29.988423417037883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d23fc96eed7%3A0x364e0a19bd725939!2sGUC%20gate%203!5e0!3m2!1sen!2seg!4v1715007489098!5m2!1sen!2seg"
										width="800"
										height="600"
										style={{ border: 0 }}
										allowFullScreen=""
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
								<div className="p-4">
									<h2 className="font-bold mb-4 text-3xl">
										Pickup Information
									</h2>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											Driver Name: John Doe
										</p>
									</div>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											Phone Number: +1234567890
										</p>
									</div>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											Vehicle Type: {deliveryVehicle}
										</p>
									</div>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											Vehicle model: Red Nissan Sunny
										</p>
									</div>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											Donation Type: Medical Supplies
										</p>
									</div>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											Quantity: 10 Pcs
										</p>
									</div>
									<div className="mb-2">
										<p className="text-gray-600 font-semibold text-lg">
											ETA: {eta}
										</p>
									</div>
									<div className="mt-6">
										<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
											Contact Support
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</>
			)}
			{/* <button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
				onClick={handleSwitchState}
			>
				Switch State
			</button> */}
		</div>
	);
};

export default DonorDelivery;
