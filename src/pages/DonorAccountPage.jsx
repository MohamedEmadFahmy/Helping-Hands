import DonorAccount from "../components/DonorAccount";
import DonorNavbar from "../components/DonorNavbar";
// import OrganizationNavbar from "../components/OrganizationNavbar";
import { useState } from "react";

const DonorAccountPage = () => {
    return (
        <>

        {/* <OrganizationNavbar /> */}
        <DonorNavbar />
        <div className="h-screen w-screen flex justify-center items-center bg-secondary">
            <DonorAccount />
        </div>
        </>
    );
};

export default DonorAccountPage;
