import { useState } from "react";

const DonorDelivery = () => {
	const [deliveryState, setDeliveryState] = useState("UpcomingDelivery");

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

	return (
		<div className="p-4 w-screen h-screen flex flex-col justify-center items-center">
			{deliveryState === "NoDonation" && (
				<div className="flex shadow-md bg-gray-200 w-3/4 items-center justify-center">
					<h1 className="text-4xl font-bold m-8">
						You Have No Donations to Deliver!
					</h1>
				</div>
			)}
			{deliveryState === "UpcomingDelivery" && (
				<div className="flex shadow-md bg-gray-200 w-3/4 items-center justify-center">
					<h1 className="text-4xl font-bold m-8">
						A delivery driver will be dispatched to your location
						shortly
					</h1>
				</div>
			)}
			{deliveryState === "DeliveryOnTheWay" && (
				<>
					<h1 className="text-4xl font-bold m-8">
						A delivery driver is on their way to pick up your
						donation
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
									Vehicle Type: Sedan
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
							<div className="mt-72">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
									Contact Support
								</button>
							</div>
						</div>
					</div>
				</>
			)}
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
				onClick={handleSwitchState}
			>
				Switch State
			</button>
		</div>
	);
};

export default DonorDelivery;
