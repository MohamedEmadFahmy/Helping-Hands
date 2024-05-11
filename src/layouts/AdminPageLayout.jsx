import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminNavbar from "../components/AdminNavbar";

import "react-toastify/dist/ReactToastify.css";

const AdminPageLayout = () => {
	return (
		<>
			<AdminNavbar />
			<Outlet />
			<ToastContainer />
		</>
	);
};

export default AdminPageLayout;
