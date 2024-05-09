import React, { useState } from "react";

const OrganizationDelivery = () => {
    const [hasOrderedDonations, setHasOrderedDonations] = useState(false);
    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [eta, setETA] = useState("");

    const handleOrderDonations = () => {
        setHasOrderedDonations(true);
        calculateETA();
    };

    const handleDeliveryDateChange = (e) => {
        setDeliveryDate(e.target.value);
    };

    const handleDeliveryTimeChange = (e) => {
        setDeliveryTime(e.target.value);
    };

    const calculateETA = () => {
        const deliveryDateTime = new Date(`${deliveryDate}T${deliveryTime}`);
        const currentDateTime = new Date();

        // Calculate the difference in milliseconds between deliveryDateTime and currentDateTime
        const timeDifferenceMs = deliveryDateTime - currentDateTime;

        // Convert milliseconds to minutes
        const timeDifferenceMin = Math.round(timeDifferenceMs / 60000);

        // Calculate ETA based on timeDifferenceMin
        const hours = Math.floor(timeDifferenceMin / 60);
        const minutes = timeDifferenceMin % 60;

        // Format ETA
        const formattedETA = `${hours} hours ${minutes} minutes`;

        setETA(formattedETA);
    };

    return (
        <div className="p-4 w-screen h-screen flex flex-col justify-center items-center">
            {!hasOrderedDonations ? (
                <div className="flex shadow-md bg-gray-200 w-3/4 items-center justify-center">
                    <form className="p-8">
                        <h1 className="text-4xl font-bold mb-8">Order Donations Delivery</h1>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">Donation Type: Medical Supplies</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-lg font-semibold">Quantity: 10 Pcs</p>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deliveryDate" className="text-lg font-semibold">
                                Delivery Date:
                            </label>
                            <input type="date" id="deliveryDate" value={deliveryDate} onChange={handleDeliveryDateChange} className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none" />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="deliveryTime" className="text-lg font-semibold">
                                Delivery Time:
                            </label>
                            <input type="time" id="deliveryTime" value={deliveryTime} onChange={handleDeliveryTimeChange} className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none" />
                        </div>
                        <button type="button" onClick={handleOrderDonations} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Order Delivery
                        </button>
                    </form>
                </div>
            ) : (
                <>
                    <h1 className="text-4xl font-bold m-8">A delivery driver is on their way to Deliver your donation</h1>
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
                            <h2 className="font-bold mb-4 text-3xl">Delivery Information</h2>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">Driver Name: John Doe</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">Phone Number: +1234567890</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">Vehicle Type: Sedan</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">Vehicle model: Red Nissan Sunny</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">Donation Type: Medical Supplies</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">Quantity: 10 Pcs</p>
                            </div>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold text-lg">ETA: {eta}</p>
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
        </div>
    );
};

export default OrganizationDelivery;
