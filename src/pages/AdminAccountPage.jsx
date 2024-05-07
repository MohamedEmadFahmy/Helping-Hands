import AdminAccount from "../components/AdminAccount";
import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";

const AdminAccountPage = () => {
    return (
        <>

        <AdminNavbar />
        <div className="h-screen w-screen flex justify-center items-center bg-secondary">
            <AdminAccount />
        </div>
        </>
    );
};

export default AdminAccountPage;
