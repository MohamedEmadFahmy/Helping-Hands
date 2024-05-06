import React from "react";

const OrganizationNavbar = () => {
    return (
        <nav className="bg-primary opacity-95 fixed w-screen py-5">
            <div className="container mx-auto">
                <ul className="flex justify-between items-center">
                    <li>
                        <a href="/" className="text-gray-800 font-bold">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray-800">About</a>
                    </li>
                    <li>
                        <a href="/services" className="text-gray-800">Services</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-800">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default OrganizationNavbar;



// style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", position: "fixed", width: "100%", zIndex: 999 }}