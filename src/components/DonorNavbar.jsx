import React from "react";

const DonorNavbar = () => {
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
                        <a href="/Donate" className="text-gray-800">Donate</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-800">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default DonorNavbar;
