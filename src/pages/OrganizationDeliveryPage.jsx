import OrganizationDelivery from "../components/OrganizationDelivery";
import OrganizationNavbar from "../components/OrganizationNavbar";
import { useState } from "react";

const OrganizationDeliveryPage = () => {
    return (
        <>

        <OrganizationNavbar />
        <div className="h-screen w-screen flex justify-center items-center bg-secondary">
            <OrganizationDelivery />
        </div>
        </>
    );
};

export default OrganizationDeliveryPage;
