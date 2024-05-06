import { useState } from "react";
import { Link } from "react-router-dom";

const DonationCreation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectToggle = () => {
        setIsOpen(!isOpen);
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    return (
        <div className="bg-gradient-to-tr border border-black from-secondaryshades-800 to-secondaryshades-900 rounded-lg flex flex-col items-center justify-center pt-8 pb-8 gap-5 w-screen h-screen">
            <h1 className="text-primary font-bold text-4xl font-sans">Create Donation</h1>
            <form onSubmit={submitForm} className="w-full flex flex-col items-center pr-10 pl-10 gap-5">
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
                    >
                        <option value="">Select category</option>
                        <option value="clothing">Clothing</option>
                        <option value="food">Food</option>
                        <option value="electronics">Electronics</option>
                    </select>
                    <div className={`absolute top-0 right-0 bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center transition-transform ${isOpen ? 'transform rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <button className="bg-primary w-1/2 h-10 rounded-xl self-center flex flex-row items-center justify-center gap-x-6">
                    Post Request
                </button>
            </form>
        </div>
    );
};

export default DonationCreation;
