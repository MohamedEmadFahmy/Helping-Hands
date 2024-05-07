import React, { useState } from "react";

const DonationCreation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState("");
    const [extraFields, setExtraFields] = useState({});

    const handleSelectToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setExtraFields({});
    };

    const handleExtraFieldChange = (e) => {
        const { name, value } = e.target;
        setExtraFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Category:", category);
        console.log("Extra Fields:", extraFields);
    };

    const renderExtraFields = () => {
        switch (category) {
            case "blood":
                return (
                    <>
                        <select
                            name="bloodType"
                            value={extraFields.bloodType || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        >
                            <option value="">Select Blood Type</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>

                        <input
                            type="text"
                            name="quantity"
                            placeholder="Quantity"
                            value={extraFields.quantity || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        />
                    </>
                );
            case "clothes":
                return (
                    <>
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            value={extraFields.age || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        />
                        <select
                            name="season"
                            value={extraFields.season || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        >
                            <option value="">Select Season</option>
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="autumn">Autumn</option>
                        </select>
                        <select
                            name="gender"
                            value={extraFields.gender || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </>
                );
            case "food":
                return (
                    <select
                        name="foodType"
                        value={extraFields.foodType || ""}
                        onChange={handleExtraFieldChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                    >
                        <option value="">Select Food Type</option>
                        <option value="fruits_vegetables">Fruits & Vegetables</option>
                        <option value="canned_foods">Canned Foods</option>
                        <option value="fresh_meals">Fresh Meals</option>
                        <option value="baked_goods">Baked Goods</option>
                    </select>
                );
            case "school":
                return (
                    <select
                        name="donationType"
                        value={extraFields.donationType || ""}
                        onChange={handleExtraFieldChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                    >
                        <option value="">Select Donation Type</option>
                        <option value="books">Books</option>
                        <option value="stationary">Stationary</option>
                    </select>
                );
            case "toys":
                return (
                    <>
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            value={extraFields.age || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={extraFields.category || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        />
                        <select
                            name="gender"
                            value={extraFields.gender || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </>
                );
            case "teacher":
                return (
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={extraFields.subject || ""}
                        onChange={handleExtraFieldChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                    />
                );
            case "doctor":
                return (
                    <input
                        type="text"
                        name="specialty"
                        placeholder="Specialty"
                        value={extraFields.specialty || ""}
                        onChange={handleExtraFieldChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                    />
                );
            case "medical":
                return (
                    <>
                        <select
                            name="donationType"
                            value={extraFields.donationType || ""}
                            onChange={handleExtraFieldChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        >
                            <option value="">Select Donation Type</option>
                            <option value="medical_devices">Medical Devices</option>
                            <option value="medical_equipment">Medical Equipment</option>
                            <option value="medication">Medication</option>
                        </select>
                        {extraFields.donationType === "medication" && (
                            <input
                                type="text"
                                name="medicalUse"
                                placeholder="Medical Use"
                                value={extraFields.medicalUse || ""}
                                onChange={handleExtraFieldChange}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                            />
                        )}
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gradient-to-tr border border-black from-secondaryshades-800 to-secondaryshades-900 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-screen h-screen">
            <h1 className="text-primary font-bold text-4xl font-sans">Create Donation</h1>
            <form onSubmit={submitForm} className="w-full flex flex-col items-center pr-10 pl-10 gap-5">
                {/* Existing input fields */}
                <div className="w-1/3">
                    <label htmlFor="donation-title" className="uppercase w-auto text-gray-700 text-xs font-bold mb-2">Title</label>
                    <input
                        id="donation-title"
                        type="text"
                        placeholder="Enter title"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4"
                        required
                    />
                </div>

                <div className="w-1/3">
                    <label htmlFor="donation-description" className="uppercase w-auto text-gray-700 text-xs font-bold mb-2">Description</label>
                    <textarea
                        id="donation-description"
                        placeholder="Enter description"
                        className="appearance-none block max-h-40 w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4 overflow-y-auto"
                        required
                    ></textarea>
                </div>

                <div className="relative w-1/3">
                    <label htmlFor="donation-category" className="uppercase w-auto text-gray-700 text-xs font-bold mb-2">Category</label>
                    <select
                        id="donation-category"
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white p-4 ${isOpen ? 'border-b-0 rounded-b-none' : ''}`}
                        required
                        onClick={handleSelectToggle}
                        onBlur={() => setIsOpen(false)}
                        onChange={handleCategoryChange}
                        value={category}
                    >
                        <option value="">Select category</option>
                        <option value="clothes">Clothing</option>
                        <option value="food">Food</option>
                        <option value="toys">Toys</option>
                        <option value="medical">Medical</option>
                        <option value="school">School</option>
                        <option value="blood">Blood</option>
                        <option value="teacher">Volunteer-Teacher</option>
                        <option value="doctor">Volunteer-Doctor</option>
                    </select>
                    <div className={`absolute top-0 right-0 bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center transition-transform ${isOpen ? 'transform rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Extra fields */}
                <div className="w-1/3">
                    {renderExtraFields()}
                </div>

                {/* Button */}
                <button className="bg-primary w-1/2 h-10 rounded-xl self-center flex flex-row items-center justify-center gap-x-6">
                    Post Request
                </button>
            </form>
        </div>
    );
};

export default DonationCreation;
