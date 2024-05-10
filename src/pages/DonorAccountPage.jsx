import DonorAccount from "../components/DonorAccount";
import { useState } from "react";

const DonorAccountPage = () => {
    return (
        <>

        <div className="h-screen w-screen flex justify-center items-center bg-secondary">
            <DonorAccount />
        </div>
        </>
    );
};

export default DonorAccountPage;
