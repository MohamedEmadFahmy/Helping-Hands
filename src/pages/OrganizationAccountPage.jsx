import OrganizationAccount from "../components/OrganizationAccount";
import OrganizationNavbar from "../components/OrganizationNavbar";
import { useState } from "react";

const OrganizationAccountPage = () => {
    return (
        <>

        <OrganizationNavbar />
        <div className="h-screen w-screen flex justify-center items-center bg-secondary">
            <OrganizationAccount />
        </div>
        </>
    );
};

export default OrganizationAccountPage;
