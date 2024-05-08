import React, { useState } from "react";

const OrganizationNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const isActiveLink = (href) => {
        return window.location.pathname === href;
    };

    return (
        <nav className="bg-primary fixed w-screen py-5">
            <div className="container mx-auto">
                <ul className="flex justify-between items-center">
                    <li>
                        <a href="/" className={`text-gray-800 font-bold ${isActiveLink("/") && "underline"}`}>Home</a>
                    </li>
                    <li>
                        <a href="/donation-creation" className={`text-gray-800 ${isActiveLink("/donation-create") && "underline"}`}>Donation Creation</a>
                    </li>
                    <li className="relative">
                        <button onClick={toggleDropdown} className="text-gray-800 cursor-pointer focus:outline-none">
                            Donations
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 opacity-95 bg-primary rounded-lg py-1 mt-1">
                                <li>
                                    <a href="/donations-fulfilled" className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${isActiveLink("/donations-fulfilled") && "underline"}`}>Fulfilled</a>
                                </li>
                                <li>
                                    <a href="/donations-pending" className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${isActiveLink("/donations-pending") && "underline"}`}>Pending</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/account-page" className={`text-gray-800 ${isActiveLink("/account-page") && "underline"}`}>Account Page</a>
                    </li>
                    <li>
                        <a href="/delivery" className={`text-gray-800 ${isActiveLink("/delivery") && "underline"}`}>Delivery</a>
                    </li>
                    <li>
                        <a href="/contact" className={`text-gray-800 ${isActiveLink("/contact") && "underline"}`}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default OrganizationNavbar;
