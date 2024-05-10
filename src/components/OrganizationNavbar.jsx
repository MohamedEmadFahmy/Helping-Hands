import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo_white.png";
import reactLogo from "../assets/images/react.png";

const OrganizationNavbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const isActiveLink = (href) => {
        return window.location.pathname === href;
    };

    const navLinkStyling = ({ isActive }) =>
        isActive
            ? "text-2xl transition-transform scale-110 font-semibold text-blue-500 border-b-2 border-blue-500 transition duration-500"
            : "text-2xl font-semibold text-white transition duration-200 ";

    return (
        <nav className="fixed sticky top-0 z-50 w-screen  h-[10vh] bg-primary flex items-center pl-10 pr-10 gap-[10rem]">
            <img
                src={logo}
                alt=""
                className="h-[80%] object-contain cursor-pointer"
                onClick={() => navigate("/organization/donation-create")}
            />
            <div
                id="nav-links"
                className="flex items-center justify-center gap-[5vw] h-full w-3/4"
            >
                <NavLink to="/" className={navLinkStyling} isActive={isActiveLink("/")}>
                    Home
                </NavLink>
                <NavLink to="/organization/donation-create" className={navLinkStyling} isActive={isActiveLink("/organization/donation-create")}>
                    Donation Creation
                </NavLink>
                <div className="relative">
                    <button onClick={toggleDropdown} className="text-2xl font-semibold text-white transition duration-200">
                        Donations
                    </button>
                    {isDropdownOpen && (
                        <div className="origin-top-center absolute w-32 rounded-md shadow-lg bg-primary focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1" role="none">
                                <NavLink to="/organization/donations/fulfilled" className="block px-4 py-2 text-white text-center hover:text-secondaryShades-700 hover:bg-gray-200" isActive={isActiveLink("/organization/donations/fulfilled")}>
                                    Fulfilled
                                </NavLink>
                                <NavLink to="/organization/donations/pending" className="block px-4 py-2 text-white text-center hover:text-secondaryShades-700 hover:bg-gray-200" isActive={isActiveLink("/organization/donations/pending")}>
                                    Pending
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
                <NavLink to="/organization/account" className={navLinkStyling} isActive={isActiveLink("/organization/account")}>
                    Account
                </NavLink>
                <NavLink to="/organization/deliveries" className={navLinkStyling} isActive={isActiveLink("/organization/deliveries")}>
                    Deliveries
                </NavLink>
            </div>
            <div className="flex items-center justify-center gap-3 w-1/7 h-full ">
                <img
                    src={reactLogo}
                    alt=""
                    className="h-[50%] cursor-pointer"
                    onClick={() => navigate("/organization/account")}
                />
                <NavLink
                    to="/organization/account"
                    className="text-white font-bold text-lg"
                >
                    Account
                </NavLink>
            </div>
        </nav>
    );
};

export default OrganizationNavbar;
